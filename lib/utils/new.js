/* @flow weak */
const logger = require('tracer').colorConsole()

const initStarter = require('./init-starter')

module.exports = (rootPath, starter='gh:brianstone/gatsby-starter-clean') => {
  initStarter(
    starter,
    {
      rootPath,
      logger,
    }, (error) => {
      if (error) {
        logger.error(error)
      }
    }
  )
}
