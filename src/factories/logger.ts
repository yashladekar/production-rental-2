import pino from "pino"


const isProduction = process.env.NODE_ENV === "production"

const rootLogger = pino({
    level: isProduction ? "info" : "debug",
    transport: isProduction
        ? undefined
        : {
            target: "pino-pretty",
            options: {
                colorize: true,
                translateTime: "yyyy-mm-dd HH:MM:ss.l o",
            },
        },
    browser: {
        asObject: true
    },

    redact: {
        paths: [
            'req.headers.authorization',
            'req.headers.cookie',
            'res.headers.set-cookie',
            '*.password',
            '*.secret',
            '*.token',
            '*.apiKey',
            '*.accessToken',
            '*.refreshToken',
        ],
        remove: true,
    },
    base: {
        env: process.env.NODE_ENV,
        revision: process.env.GITHUBLAB_COMMIT_SHA,
    }
});

export function createChildLogger(meta: Record<string, unknown>) {
    return rootLogger.child(meta)
}

export default rootLogger;