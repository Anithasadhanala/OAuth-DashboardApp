// app/page.js
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  const AuthButton = () => {
    router.push('/about'); // Change '/dashboard' to the desired route
    if (session) {
      return (
        <div>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      );
    }
    return <button className="font-sm text-slate-500 ml-4 bg-white pl-3 pr-3 text-xs rounded-lg p-1" onClick={() => signIn('google')}>Sign in with Google</button>;
  };

  return (
    <div className="flex h-screen">
      <div className="bg-slate-900 w-1/5 flex justify-center items-center">
        <h1 className="font-bold text-white text-lg">Board.</h1>
      </div>
      <div className="flex flex-col justify-center items-center bg-slate-200 w-4/5">
        <div className="">
          <h1 className="font-bold text-xl">Sign In</h1>
          <p className="text-xs font-semibold mb-3 text-slate-600">Sign in with your account</p>
          <div className="flex mb-5">
            <AuthButton />
            <p className="font-sm text-slate-500 ml-4 bg-white pl-3 pr-3 text-xs rounded-lg p-1">Sign in with Apple</p>
          </div>
          <form className="rounded-lg bg-white p-4">
            <label htmlFor="email" className="text-sm font-normal">Email address</label>
            <br />
            <input type="email" className="rounded-md text-sm p-1 bg-slate-200" id="email" placeholder="Enter your email" />
            <br />
            <label htmlFor="password" className="text-sm font-normal mt-6">Password</label>
            <br />
            <input type="password" className="rounded-md text-sm p-1 bg-slate-200" id="password" placeholder="Enter your password" />
            <p className="text-sm font-normal text-blue-500 mt-4 mb-4">Forgot Password?</p>
            <button type="submit" className="bg-black rounded-md mb-2 text-white text-sm p-1 w-100">Sign In</button>
            <p className="text-sm font-normal text-slate-500">
              Don't have an account? <span className="text-sm font-normal text-blue-400">Register here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
