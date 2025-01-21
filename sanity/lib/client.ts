import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: '2025-01-17', // Ensure this matches your setup
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Use an environment variable for security
})
