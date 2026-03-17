import { AbilityBuilder, createMongoAbility } from "@casl/ability";
import type { AppAbility } from "./types";
import type { UserContext } from "@/store/auth/authSlice";
import { mapAction, mapSubject } from "./codeToAbility";

export function defineAbilityFor(user: UserContext | null): AppAbility {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

    if (!user) {
        cannot("manage", "all");
        return build();
    }

    // --- 1. Static RBAC Rules (From Backend Codes) ---
    user.authorizationCodes.forEach((code) => {
        const action = mapAction(code);
        const subject = mapSubject(code);

        // FIX: Cast 'subject' to string. 
        // TypeScript complains because it thinks 'subject' might be an 'Article' interface,
        // but we know mapSubject() strictly returns string identifiers here.
        can(action, subject as string);
    });

    // --- 2. Dynamic ABAC Rules (Attribute Based) ---

    // Rule: Users can manage their own profile
    can("manage", "UserProfile", { userId: user.userId });

    // Rule: Users can update Articles they authored
    can("update", "Article", { authorId: user.userId });

    // Rule: Users can read Articles that are published
    can("read", "Article", { isPublished: true });

    return build({
        detectSubjectType: (item) => {
            if (typeof item === 'string') return item;
            return (item as { kind?: string }).kind || item.constructor.name;
        }
    });
}