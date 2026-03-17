import { createChildLogger } from './factories/logger'

export const logger = createChildLogger({
    module: 'instrumentation-shared'
})
