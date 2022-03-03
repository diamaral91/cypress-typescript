module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};

const { format } = require('date-and-time');
const downloadsFolder = require('downloads-folder');