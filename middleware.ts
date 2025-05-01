import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  // ✅ Skip Clerk/Supabase logic for public routes like sitemap
  const publicRoutes = ["/", "/sitemap.xml"];
  if (publicRoutes.includes(url)) {
    return NextResponse.next();
  }

  // Run Clerk middleware
  const clerkResponse = clerkMiddleware(req, {} as any);
  if (clerkResponse) {
    return clerkResponse;
  }

  // Supabase session logic (optional)
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

// ⛔ Original matcher catches sitemap.xml and routes it through middleware
// ✅ Updated matcher ensures sitemap is not affected
export const config = {
  matcher: [
    "/((?!_next|.*\\..*|sitemap.xml).*)",
    "/(api|trpc)(.*)",
  ],
};
