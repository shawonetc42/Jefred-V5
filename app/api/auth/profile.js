// app/api/auth/profile.js
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:5000/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await res.json();

  if (res.ok) {
    return NextResponse.json(data);
  }

  return NextResponse.json({ error: data.error }, { status: res.status });
}
