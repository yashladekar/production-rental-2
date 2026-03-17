"use client";

import { createContext, useContext } from "react";

import type { AuthState } from "./auth/authSlice";
import { initialAuthState } from "./auth/authSlice";

type RootState = {
    auth: AuthState;
};

const defaultState: RootState = {
    auth: initialAuthState,
};

export const AuthStoreContext = createContext<RootState>(defaultState);

export function useAppSelector<T>(selector: (state: RootState) => T): T {
    const state = useContext(AuthStoreContext);
    return selector(state);
}
