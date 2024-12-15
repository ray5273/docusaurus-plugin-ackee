# docusaurus-plugin-ackee-v3

> **Note**
> Modified to fix the "ackeeTracker is not defined" bug!

Use [Ackee](https://github.com/electerious/Ackee) in your [Docusaurus](https://github.com/facebook/docusaurus) site.

Requires a running Ackee server.

Tested with Docusaurus v3.5.2 and Ackee v3.4.2

## Install

```zsh
yarn add docusaurus-plugin-ackee-v3
```

or

```zsh
npm install docusaurus-plugin-ackee-v3
```

## Usage

```javascript
// In your docusaurus.config.js
module.exports = {
  plugins: [
    [
      "docusaurus-plugin-ackee-v3",
      {
        // Ackee domain ID
        domainId: "your_ackee_domain_id",

        // URL to your Ackee server
        // MUST NOT END WITH SLASH ('/')
        server: "https://analytics.example.com",

        // Enable or disable tracking of personal data (OS, device, browser, screen size, user language)
        detailed: false,

        // Enable or disable tracking when on localhost
        ignoreLocalhost: true,

        // Enable or disable the tracking of your own visits
        // Enabled by default, should be turned off when using a wildcard Access-Control-Allow-Origin header
        // Some browsers may strictly block third-party cookies and this option will have no impact in this situation
        ignoreOwnVisits: true,
      },
    ],
  ],
};
```

## License

MIT
