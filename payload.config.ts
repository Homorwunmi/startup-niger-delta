// import sharp from 'sharp'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { News } from 'collections/News'
import { Category } from 'collections/Category'
import { funding } from 'collections/Funding'
import { events } from 'collections/Events'
import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: 'http://localhost:3000',
  email: nodemailerAdapter(),
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://startupnigerdelta.com',
    'https://www.startupnigerdelta.com',
  ],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // livePreview: {
    //   url: 'http://localhost:3000',
    //   // collections: ['homepage', 'blog', 'about', 'contact', 'mainServicePage', 'service'],
    // },
  },
  collections: [
    Users,
    Media,
    News,
    events,
    Category,
    funding
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DB_URL || '',
  }),
  // sharp,
  plugins: [
    payloadCloudPlugin(),
    vercelBlobStorage({
      enabled: true,
      clientUploads: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
