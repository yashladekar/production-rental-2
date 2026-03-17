## Auth Setup

This app is wired to the existing backend SSO/session flow.

Required environment variables:

```bash
NEXT_PUBLIC_APP_URL=https://your-frontend-host
NEXT_PUBLIC_APPLICATION_NAME=FleetHub
NEXT_PUBLIC_LOGIN_URL=https://your-host/jlrsso
NEXT_PUBLIC_LOGOUT_URL=https://your-host/admin/toolboxLogout
AUTH_JWT_COOKIE_NAME=JWT_TOKEN
AUTH_VALIDATE_URL=https://your-host/admin/api/v1/users/me
AUTH_SESSION_COOKIE_NAME=JSESSIONID
```

How auth works:

- `/login` redirects the browser to `NEXT_PUBLIC_LOGIN_URL`
- if an old-style `JWT_TOKEN` cookie is present and unexpired, the app accepts it the same way the old UI did
- the backend creates or resumes the `JSESSIONID` session
- protected Next routes validate that session by calling `AUTH_VALIDATE_URL`
- logout redirects the browser to `NEXT_PUBLIC_LOGOUT_URL`
- unauthenticated users are redirected back to `/login`

Important deployment note:

- This frontend must be deployed on the same host or behind the same gateway as the backend session endpoints
- if the frontend is hosted on a different origin, the backend's `JSESSIONID` cookie will not be available to the Next app and protected routes will not work correctly

## Getting Started

Run the development server:

```bash
npm run dev
```
