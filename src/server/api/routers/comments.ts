import clerkClient from "@clerk/clerk-sdk-node";
import type { User } from "@clerk/nextjs/dist/api";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterUserForClient = (user: User) => {
    return {id: user.id, username: user.username, profileImageUrl: user.profileImageUrl}
}


export const commentsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
   const comments = await ctx.prisma.comment.findMany({
take: 100,})

    const users = (await clerkClient.users.getUserList({
        userId: comments.map((post) => post.authorId), limit: 100,
    }))
    .map(filterUserForClient)

    return comments.map((comment) => ({
        comment,
        author: users.find((user) => user.id === comment.authorId)!
    }))
  }),
});