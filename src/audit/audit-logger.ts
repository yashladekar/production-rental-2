import rootLogger from "@/factories/logger";

export type AuditEvent = "AUTH_LOGIN_SUCCESS"
    | "AUTH_LOGIN_FAILURE"
    | "ACCESS_DENIED"
    | "RATE_LIMIT_BLOCK"
    | "BOT_DETECTED"
    | "PRIVILEGED_ACTION";


export function auditLog(event: AuditEvent, payload: {
    userId?: string;
    ip?: string;
    path?: string;
    userAgent?: string;
    meta?: Record<string, unknown>;
}) {
    rootLogger.info({
        audit: true,
        event,
        ...payload,
        timestamp: new Date().toISOString(),
    },
        `Audit Event: ${event} for user ${payload.userId || "unknown"} at path ${payload.path || "unknown"} from IP ${payload.ip || "unknown"}`)
}