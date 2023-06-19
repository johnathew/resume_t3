import clerkClient from "@clerk/clerk-sdk-node";
import { User } from "@clerk/nextjs/dist/types/server/clerkClient";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure, publicProcedure } from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};

export const commentsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const comments = await ctx.prisma.comment.findMany({
      take: 100,
      orderBy: [{createdAt: 'desc'}]
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: comments.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);

    return comments.map((comment) => {
      const author = users.find((user) => user.id === comment.authorId);

      if (!author || !author.username) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author for post not found",
        });
      }
    

      return {
        comment,
        author: {
          ...author,
          username: author.username,
        },
      };
    });
  }),


  create: privateProcedure.input(z.object({
    content: z.string().min(1).max(280)
  }))
  .mutation(async ({ctx, input}) => {
    const authorId = ctx.userId

    const comment = await ctx.prisma.comment.create({
        data: {
            authorId,
            content: input.content
        }
    });
    return comment
  })
});
