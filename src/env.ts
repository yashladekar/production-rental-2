import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        DATABASE_URL: z.url(),
        LOGIN_URL: z.url(),
        AUTH_SESSION_COOKIE_NAME: z.string().min(1).default("JSESSIONID"),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.url(),
        NEXT_PUBLIC_LOGIN_URL: z.url(),
        NEXT_PUBLIC_APPLICATION_NAME: z.string().min(1),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        LOGIN_URL: process.env.LOGIN_URL,
        AUTH_SESSION_COOKIE_NAME: process.env.AUTH_SESSION_COOKIE_NAME,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_LOGIN_URL: process.env.NEXT_PUBLIC_LOGIN_URL,
        NEXT_PUBLIC_APPLICATION_NAME: process.env.NEXT_PUBLIC_APPLICATION_NAME,
    },
});
