import { init } from '@jill64/sentry-sveltekit-cloudflare/server'

const {onHandle, onError} = init(
  'https://a5b8e11dcd363aeb1a6eda57faabca4d@o4505814639312896.ingest.sentry.io/4506375804944384'
)

export const handle = onHandle()
export const handleError = onError()
