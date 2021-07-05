const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,
  eyes: {
    appName: ' app name',
    enableEyesLogs: true, // this will enable the SDK's logs and write them to the console
    useVisualGrid: true, // this will utilize the Ultrafast grid
    concurrency: 5,
    //layoutBreakpoints:true, [Array of widths] or a boolean value|| Responsive pages display different content depending on the viewport's width, so this option can be used to instruct eyes to take dom captures using those widths, and test all responsive variations of your page
    browsersInfo: [
      {name: BrowserType.CHROME, width: 800, height: 600},
      {name: BrowserType.FIREFOX, width: 700, height: 500},
      {name: BrowserType.IE_11, width: 1600, height: 1200},
      {name: BrowserType.EDGE_CHROMIUM, width: 1024, height: 768},
      {name: BrowserType.SAFARI, width: 800, height: 600},
      {chromeEmulationInfo: {deviceName: DeviceName.iPhone_X, screenOrientation: ScreenOrientation.PORTRAIT}},
      {chromeEmulationInfo: {deviceName: DeviceName.Pixel_2, screenOrientation: ScreenOrientation.PORTRAIT}},

      {iosDeviceInfo:{deviceName: IosDeviceName.iPhone_11_Pro_Max, screenOrientation: ScreenOrientation.PORTRAIT,iosVersion: 'latest'}} //safari on ios devices
    ],
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
