import { setHeader, defineEventHandler } from 'h3'
import { useRuntimeConfig } from '#imports'

const helmConfig = useRuntimeConfig().helm

export default defineEventHandler((event) => {
  setHeader(event, 'X-Permitted-Cross-Domain-Policies', helmConfig.xPermittedCrossDomainPolicies)
})
