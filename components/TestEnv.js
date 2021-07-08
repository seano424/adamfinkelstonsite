export default function TestEnv() {
  console.log('dataset', process.env.NEXT_PUBLIC_SANITY_DATASET)
  console.log('projectId', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
  console.log('productionOnly', process.env.NEXT_PUBLIC_SANITY_PRODUCTION_ONLY)
  console.log('node', process.env.NODE_ENV)
  console.log('token', process.env.NEXT_PUBLIC_SANITY_API_TOKEN)
  return ' '
}
