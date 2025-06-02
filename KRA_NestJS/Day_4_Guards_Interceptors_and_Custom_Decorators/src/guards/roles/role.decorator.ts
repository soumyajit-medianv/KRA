import { SetMetadata } from "@nestjs/common";
import { Role } from "./role.enums";

export const ROLES_KEY = "roles";

// Custom Decorator
// This decorator is used to accept multiple value inside the ROLES_KEY. And that value is accept using the SetMetadata.
// SetMetadata() - It is used to inject role and the data is inject by key-value pair.
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

