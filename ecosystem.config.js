module.exports = {
  apps: [
    {
      name: "backend-service",
      script: "node dist/main.js",
      env: {
          "PORT":"6060",
          "TYPEORM_CONNECTION": "postgres",
          "POSTGRES_PASSWORD": "password",
          "POSTGRES_USER": "postgres",
          "POSTGRES_DB": "postgres",
          "POSTGRES_PORT": "5444",
          "POSTGRES_HOST": "3.0.95.43",
          "DATABASE_URI": "postgres://postgres:password@3.0.95.43:5444/postgres",
          "DEV_TENANT_ID": '73e7859d-49e3-4a4f-bff7-9b03df1da0eb',
          "JWT_SECRET": "jwt_secret",
          "NODE_ENV": "production"
      }
    }]
}
