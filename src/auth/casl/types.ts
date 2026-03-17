import { MongoAbility } from "@casl/ability";

export type Actions =
    | "read"
    | "create"
    | "update"
    | "delete"
    | "manage";

export interface Article {
    kind: "Article"; // Discriminator must match what you use in detectSubjectType
    id: string;
    authorId: string;
    isPublished: boolean;
}

export interface UserProfile {
    kind: "UserProfile";
    id: string;
    userId: string;
}

export type Subjects =
    | string
    | "all"
    | Article
    | UserProfile;

// CHANGE: Use MongoAbility instead of PureAbility
export type AppAbility = MongoAbility<[Actions, Subjects]>;