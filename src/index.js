const ackeeTracker = require('ackee-tracker');

module.exports = function foo(context, options) {
  if (!options) {
    throw new Error(
        'You need to specify Ackee options in docusaurus.config.js',
    );
  }

  const {
    domainId,
    server,
    detailed = false,
    ignoreLocalhost = false,
    ignoreOwnVisits = false,
    trackerFileUrl = server + '/tracker.js',
  } = options;

  if (!domainId) {
    throw new Error(
        'You need to specify Ackee domainId in docusaurus.config.js',
    );
  }

  if (!server) {
    throw new Error('You need to specify Ackee server in docusaurus.config.js');
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-ackee-tracker',
    getClientModules() {
      return [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: server,
            },
          },
        ],
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              // eslint-disable-next-line no-template-curly-in-string
              src: trackerFileUrl,
            },
          },
          {
            tagName: 'script',
            innerHTML: `ackeeTracker.create('${server}', {
              detailed: ${detailed},
              ignoreLocalhost: ${ignoreLocalhost},
              ignoreOwnVisits: ${ignoreOwnVisits},
            }).record('${domainId}')`,
          },
        ],
      };
    },
  };
};