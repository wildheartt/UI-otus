module.exports = {
  configurations: {
    'chrome.laptop': {
      target: 'chrome.docker',
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false,
    },
    'chrome.iphone7': {
      target: 'chrome.docker',
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      mobile: true,
    },
  },
  diffingEngine: 'pixelmatch',
  threshold: 0.1,
};
