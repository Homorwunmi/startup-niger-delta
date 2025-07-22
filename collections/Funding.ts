import { CollectionConfig } from "payload";

export const funding: CollectionConfig = {
  slug: 'funding',
  labels: {
    singular: 'Funding',
    plural: 'Funding',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      label: 'Funding Type',
      options: [
        { label: 'Angel Investors', value: 'angel-investors' },
        { label: 'Venture Capitalists', value: 'venture-capitalists' },
        { label: 'Corporate Venture Capital', value: 'corporate-venture-capital' },
        { label: 'Seed Investors', value: 'seed-investors' },
        { label: 'Accelerators', value: 'accelerators' },
        { label: 'Incubators', value: 'incubators' },
      ]
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category Type',
      options: [
        { label: 'Fintech', value: 'fintech' },
        { label: 'E-commerce', value: 'e-commerce' },
        { label: 'biotech', value: 'biotech' },
        { label: 'AgriTech', value: 'agritech' },
        { label: 'Health Tech', value: 'health-tech' },
        { label: 'Edtech', value: 'edtech' },
        { label: 'Artificial Intelligence', value: 'artificial-intelligence' },
        { label: 'Gaming', value: 'gaming' },
        { label: 'Robotics', value: 'robotics' },
        { label: 'Others', value: 'others' },
      ]
    },
    {
      name: 'year',
      type: 'number',
      label: 'Year of Funding',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Funding Logo',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Funding Title',
    },
    // {
    //   name: ''
    // }
  ]
}