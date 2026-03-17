export type UserContext = {
    userId: string;
    userName: string;
    authorizationCodes: string[];
};

export type AuthState = {
    user: UserContext | null;
    loading: boolean;
};

export const initialAuthState: AuthState = {
    user: null,
    loading: false,
};
