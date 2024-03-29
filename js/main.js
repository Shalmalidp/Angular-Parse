import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AddController from './controllers/add.controller';
import ListController from './controllers/list.controller';
import SingleController from './controllers/single.controller';
import EditController from './controllers/edit.controller';

import WhiskeyService from './services/whiskey.service';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'UeI02XrLuhmwL347moGR7XY7vSwH5bQ7fkhzL7Kx',
        'X-Parse-REST-API-Key': 'C3s1o7jASR7XGfEw6KBTsTIUywozLAYqphxiJ291'
      }
    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
  .controller('EditController', EditController)
  .service('WhiskeyService', WhiskeyService)
;