import React from 'react';
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Home from './Home';

export default function HomePage() {
  const { userId } = auth();
  if (userId != null) redirect("/events");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Home />
    </div>
  );
}