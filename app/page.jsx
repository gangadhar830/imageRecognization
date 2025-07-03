'use client';

import { SignIn } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen">
<SignIn routing="hash" afterSignInUrl="/root" />
    </main>
  );
}
