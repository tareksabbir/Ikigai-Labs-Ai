"use client";

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import AuthLoadingView from "@/features/auth/components/auth-loading-view";
import UnauthenticatedView from "@/features/auth/components/unauthenticated-view";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <UnauthenticatedView />
      </Unauthenticated>
      <AuthLoading>
        <AuthLoadingView />
      </AuthLoading>
    </>
  );
}
