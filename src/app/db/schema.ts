import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
 
export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: text('title'),
  author: text('author'),
});