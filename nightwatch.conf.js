const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,
  eyes: {
    appName: 'your app name',
    enableEyesLogs: true, // this will enable the SDK's logs and write them to the console
    useVisualGrid: true, // this will utilize the Ultrafast grid
    concurrency: 5
  },
  custom_commands_path: ['node_modules/@applitools/eyes-nightwatch/commands'],
  test_settings: {
    default: {
      webdriver: {
        start_process: true,
        port: 4444
      },
      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },
    chromeHeadless: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          args: ['--headless']
        }
      }
    },
    chrome: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false
        }
      }
    },
    firefox: {
      webdriver: {
        server_path: geckodriver.path,
        cli_args: ['--port', '4444', '--log', 'debug']
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    }
  }
};
