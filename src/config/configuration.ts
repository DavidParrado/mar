import { EnvironmentVariables } from 'src/common/interfaces/env.interface'

export default (): EnvironmentVariables => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    defaultLimit: parseInt(process.env.PORT, 10) || 10,
    mongoDBConnectionString: process.env.MONGO_DB_CONNECTION_STRING,
    mongoDBTestConnectionString: process.env.MONGO_DB_TEST_CONNECTION_STRING,
    jwtSecret: process.env.JWT_SECRET || '',
    cookiesSecret: process.env.COOKIES_SECRET,
    env: process.env.NODE_ENV || 'dev'
  }
}
