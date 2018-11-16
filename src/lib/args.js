const chalk = require('chalk')
module.exports = require('yargs')
   .usage('Usage:\n' + ('' + chalk.green.bold('  $0 <module names>\n')))
   .example('' + chalk.green.bold('$0'))
   .options({
      'n': {
         alias: 'nickname',
         describe: 'Nickname about participants'
      },
      'k': {
         alias: 'keyword',
         describe: 'Any words'
      },
      'c': {
         alias: 'count',
         describe: 'Displayed count'
      },
      'v': {
         alias: 'version',
         describe: 'Show version'
      },
      'h': {
         alias: 'help',
         describe: 'Show help'
      }
   })
   .locale('en')
   .argv
