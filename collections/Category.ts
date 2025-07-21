import { CollectionConfig } from "payload";

export const Category: CollectionConfig = {
  slug: 'category',
  labels: {
    singular: 'Category',
    plural: 'Category',
  },
  fields: [
    {
      name: 'categoryName',
      type: 'text',
      label: 'Category Name',
    },
    {
      name: 'description',
      type: 'textarea'
    }
  ],
  admin: {
    useAsTitle: 'categoryName',
  },
}