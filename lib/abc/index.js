/* eslint-env node */
'use strict';

module.exports = {
  name: 'abc',

  isEmberCLIAddon() {
  	return false;
  },

  isDevelopingAddon: function() {
    return true;
  }
};
