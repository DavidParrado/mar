export interface EnvironmentVariables {
  port: number
  defaultLimit: number
  mongoDBConnectionString: string
  mongoDBTestConnectionString: string
  jwtSecret: string
  cookiesSecret: string
  env: string
}
