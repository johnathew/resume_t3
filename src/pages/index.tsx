import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  // never want user to connect directly to a DB
  const { data } = api.comments.getAll.useQuery();
  const user = useUser();

  return (
    <>
      <Head>Testing</Head>
      <main className="flex flex-col">
        Hello
        {!user.isSignedIn && <SignInButton />}
        {user.isSignedIn && <SignOutButton />}
        <div>
          {data?.map((comment) => (
            <div key={comment.authorId}>{comment.content}</div>
          ))}
        </div>
      </main>
    </>
  )
};

export default Home;
