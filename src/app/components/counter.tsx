"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  const [count, setCount] = useState(0);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
