import { createContext } from "react";
import { createMongoAbility } from "@casl/ability";
import type { AppAbility } from "./types";

const defaultAbility = createMongoAbility<AppAbility>([]);

export const AbilityContext = createContext<AppAbility>(defaultAbility);