// 
/**
 * @type {string[]}
*/
export const publicRoutes: string[] = [
  "/",
  "/auth/forgot_password",
]

/**
 * @type {string[]}
*/
export const privateRoutes: string[] = [
  "/dashboard:*",
  "/print:*",
  "/new_report:*",
  "/relatories:*",
]

/**
 * @type {string}
*/
export const apiAuthPrefix: string = "/api/auth";

/**
 * @type {string}
*/
export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";