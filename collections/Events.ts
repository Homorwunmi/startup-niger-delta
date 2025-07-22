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
    },
    {
      name: 'description',
      type: 'textarea'
    },
    {
      name: 'location',
      type: 'text',
      label: 'Event Location',
    },
    {
      name: 'date',
      type: 'date',
      label: 'Event Date',
    },
    {
      name: 'time',
      type: 'text',
      label: 'Event Time',
    },
  ]
}