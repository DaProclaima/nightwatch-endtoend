var conf = require('../conf/nightwatch.conf.js');

module.exports = {

  'Test ': function (browser) {
    before(browser => browser.url('https://www.ecosia.org/'));

    browser
      .url('https://www.veepee.fr/')
      .waitForElementVisible('body')
      .assert.titleContains('Veepee : grandes marques à prix discount, ventes privées chaque jour.');

    after(browser => browser.end());

  }
};




