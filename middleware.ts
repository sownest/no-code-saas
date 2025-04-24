import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function middleware(req: NextRequest) {
  // Run Clerk middleware
  const clerkResponse = clerkMiddleware(req, {} as any);

  // If Clerk middleware returns a response, continue with it
  if (clerkResponse) {
    return clerkResponse;
  }

  // Add Supabase session handling (if needed)
  const supabaseToken = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (supabaseToken) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase.auth.getUser(supabaseToken);
    if (error) {
      console.error("Supabase session error:", error.message);
      return NextResponse.json({ error: "Invalid Supabase session" }, { status: 401 });
    }

    const res = NextResponse.next();
    res.headers.set("X-User-Id", data.user?.id || "");
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply middleware to all routes except static files and Next.js internals
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
