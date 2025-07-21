import type { CollectionConfig } from 'payload'
// import sharp from 'sharp'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
  upload: {
    adminThumbnail: 'small',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 250,
        fit: 'cover',
        position: 'center',
      },
      {
        name: 'small',
        width: 900,
        height: undefined,
        fit: 'cover',
        position: 'center',
      },
      {
        name: 'medium',
        width: 1200,
        height: undefined,
        fit: 'contain',
        position: 'center',
      },
      {
        name: 'large',
        width: 1800,
        height: undefined,
        fit: 'cover',
        position: 'center',
      },
    ],
    mimeTypes: [
      'image/png',
      'image/jpeg',
      'image/jpg',
      'image/webp',
      'image/gif',
      'application/pdf',
    ],
  },
}
