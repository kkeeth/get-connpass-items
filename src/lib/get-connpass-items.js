const yargs = require('yargs')
const chalk = require('chalk')
const boxen = require('boxen')
const axios = require('axios')
const utils = require('./utils')
const args  = require('./args')

const Spinner = require('cli-spinner').Spinner
const spinner = new Spinner('Proccessing... %s')
spinner.setSpinnerString(18)

const instance = axios.create({
   baseURL: 'https://connpass.com/api/v1/',
   timeout: 30000
})

/**
 * get items
 * (this is the main function)
 *
 * @param  void
 * @return void
 */
module.exports = () => {
   spinner.start()
   instance
      .get('/event', {
         params: {
            keyword:  args.k || '',
            nickname: args.n || '',
            count:    args.c || ''
         }
      })
      .then((res) => {
         spinner.stop()
         console.log('\n')

         res.data.events.forEach((item) => {
            console.log(boxen(`
   title: ${item.title}   
   url:   ${item.event_url}   
   date:  ${item.updated_at}
               `, { borderColor: 'cyan' }
            ))
         })
      })
      .catch((err) => {
         spinner.stop()
         console.log('\n')

         if (err.config.timeout === 30000) {
            console.log(boxen('   Request timeout ;(   \n   Please try again.', { borderColor: 'red' }))
            return
         }
         switch (err.response.status) {
            case 502:
               console.log(boxen('   Now on maintenance ;(   ', { borderColor: 'red' }))
               break
            case 504:
            default:
               console.log(boxen('   Internal Server Error ;(   ', { borderColor: 'red' }))
               break
         }
      })
}
