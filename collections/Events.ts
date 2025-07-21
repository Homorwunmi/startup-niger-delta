import { CollectionConfig } from "payload";

export const events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Event',
    plural: 'Event',
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    }
  ]
}