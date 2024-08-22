import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const postsTable = pgTable("posts", {
  id: serial("_id").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  content: text("body").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("_createdAt").notNull().defaultNow(),
  updatedAt: timestamp("_updatedAt")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const usersTable = pgTable("profiles", {
  id: serial("id").primaryKey(),
  name: text("full_name").notNull(),
  avatar: text("avatar_url").notNull(),
  email: text("username").notNull().unique(),
});
