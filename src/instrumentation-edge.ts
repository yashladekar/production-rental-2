import { error } from "console"
import { createChildLogger } from "./factories/logger"

const logger = createChildLogger({
    module: 'instrumentation-edge'
})

async function register() {
    await import('./instrumentation-shared')
}

register().then(() => {
    logger.info("completed edge instrumentation setup")
}).catch((error) => {
    logger.error('Error while running edge runtime startup tasks')
})