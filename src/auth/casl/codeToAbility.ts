import { AbilityBuilder, createMongoAbility } from "@casl/ability";
import type { AppAbility, Actions } from "./types";

const VERB_MAP: Record<string, Actions> = {
    GET: "read",
    POST: "create",
    PUT: "update",
    DELETE: "delete",
};

const PREFIX_MAP: Record<string, Actions> = {
    VIEW_: "read",
    ADD_: "create",
    MODIFY_: "update",
    DELETE_: "delete",
};

export function mapAction(code: string): Actions {
    const suffix = code.match(/\.(GET|POST|PUT|DELETE)$/);
    if (suffix) return VERB_MAP[suffix[1]];

    for (const prefix in PREFIX_MAP) {
        if (code.startsWith(prefix)) {
            return PREFIX_MAP[prefix];
        }
    }

    return "read";
}

export function mapSubject(code: string): string {
    return code
        .replace(/\.(GET|POST|PUT|DELETE)$/, "")
        .replace(/^(VIEW_|ADD_|MODIFY_|DELETE_)/, "")
        .toUpperCase()
        .trim();
}

export function buildAbilityFromCodes(
    authorizationCodes: string[]
): AppAbility {
    const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

    authorizationCodes.forEach((code) => {
        const action = mapAction(code);
        const subject = mapSubject(code);

        if (process.env.NODE_ENV === "development") {
            if (!action || !subject) {
                console.warn("Invalid auth code:", code);
            }
        }

        can(action, subject);
    });

    return build();
}
