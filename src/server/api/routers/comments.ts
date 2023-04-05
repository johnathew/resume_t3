import clerkClient from "@clerk/clerk-sdk-node";
import type { User } from "@clerk/nextjs/dist/api";
import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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
      console.log(author.username);

      return {
        comment,
        author: {
          ...author,
          username: author.username,
        },
      };
    });
  }),
});
