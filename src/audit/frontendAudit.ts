export type AuditEvent = {
    event: "AUTH_LOGIN_SUCCESS"
    | "AUTH_LOGIN_FAILURE"
    | "ACCESS_DENIED"
    | "RATE_LIMIT_BLOCK"
    | "BOT_DETECTED"
    | "PRIVILEGED_ACTION";
    action: string;
    userId?: string;
    ip?: string;
    subject?: string;
    timestamp: string;
}

export function auditForbiddenAction(
    action: string,
    subject: string
) {
    console.warn("AUDIT_FORBIDDEN_UI", {
        action,
        subject,
        timestamp: new Date().toISOString(),
    });
}