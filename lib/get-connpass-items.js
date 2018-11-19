'use strict';

var yargs = require('yargs');
var chalk = require('chalk');
var boxen = require('boxen');
var axios = require('axios');
var utils = require('./utils');
var args = require('./args');

var Spinner = require('cli-spinner').Spinner;
var spinner = new Spinner('Proccessing... %s');
spinner.setSpinnerString(18);

var instance = axios.create({
   baseURL: 'https://connpass.com/api/v1/'
});

/**
 * get items
 * (this is the main function)
 *
 * @param  void
 * @return void
 */
module.exports = function () {
   spinner.start();
   instance.get('/event', {
      params: {
         keyword: args.k || '',
         nickname: args.n || '',
         count: args.c || ''
      }
   }).then(function (res) {
      res.data.events.forEach(function (item) {
         console.log(boxen('\n   title: ' + item.title + '   \n   url:   ' + item.event_url + '   \n   date:  ' + item.updated_at + '\n               ', { borderColor: 'cyan' }));
      });
   }).then(function () {
      spinner.stop();
   }).catch(function (err) {
      spinner.stop();
      console.log('\n');

      switch (err.response.status) {
         case 502:
            console.log(boxen('   Now on maintenance   ', { borderColor: 'red' }));
            break;
         case 504:
         default:
            console.log(boxen('   Internal Server Error   ', { borderColor: 'red' }));
            break;
      }
   });
};