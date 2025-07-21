import { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: 'news',
  labels: {
    singular: 'News Article',
    plural: 'News Article',
  },
  defaultPopulate: {
    category: {
      fields: true,
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'publishedDate',
      type: 'date',
      defaultValue: new Date(),
    },
    {
      name: 'author',
      type: 'text',

    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'category',
      // hasMany: false,
    },
  ]
}