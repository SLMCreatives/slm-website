import { defineField, defineType } from "sanity";

export const comments = defineType({
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    defineField({
      title: "Approved",
      name: "approved",
      type: "boolean",
      description: "Comments won't show on the site without approval",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "comment",
      type: "text",
    }),
    defineField({
      name: "post",
      type: "reference",
      to: [{ type: "post", type: "_id" }],
    }),
  ],
});
