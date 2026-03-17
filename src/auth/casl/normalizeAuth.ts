type BackendAuth = {
    userId: string;
    userName: string;
    userRoles: {
        roleName: string;
        roleAuthorizations: {
            authorizationCode: string;
        }[];
    }[];
};

export function extractAuthorizationCodes(
    auth: BackendAuth
): string[] {
    return auth.userRoles.flatMap((role) =>
        role.roleAuthorizations.map(
            (a) => a.authorizationCode
        )
    );
}
