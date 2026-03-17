import { createChildLogger } from './factories/logger'
const logger = createChildLogger({
    module: 'instrumentation-node'
})

async function register() {
    await import('./instrumentation-shared')
}

register()
    .then(() => {
        logger.info('Completed node runtime startup tasks')
    })
    .catch(() => {
        logger.error('Error while running node runtime startup tasks')
    })
