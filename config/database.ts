module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL", true)
        ? { rejectUnauthorized: false } // necessary for Supabase
        : false,
    },
    // Supabase session pooler allows 15 clients in total, shared by the old
    // and new instance during a deploy (and any local `strapi develop`)
    pool: {
      min: env.int("DATABASE_POOL_MIN", 0),
      max: env.int("DATABASE_POOL_MAX", 5),
    },
  },
});