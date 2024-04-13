import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({publicRoutes: ["/leaderboard/api"]});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};