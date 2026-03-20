import { redirect } from "next/navigation";

import { hasActiveSession } from "@/auth/session";

export default async function Home() {
    const authenticated = await hasActiveSession();
    redirect(authenticated ? "/dashboard" : "/login");
}
