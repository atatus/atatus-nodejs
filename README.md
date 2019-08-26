Atatus for Node.js
============================

[Atatus](https://www.atatus.com/) Node.js agent allows you to monitor your Node.js application performance and captures errors in real-time.

[Create a free account](https:///www.atatus.com) to start monitoring your Node.js apps.

Installation & Setup
--------------------

Install atatus-nodejs using npm:

```bash
npm install --save atatus-nodejs
```

Require atatus-nodejs in your node.js app:

```javascript
var atatus = require("atatus-nodejs");
```

Start the atatus agent with your API key:

```javascript
atatus.start({
    licenseKey: "YOUR_LICENSE_KEY",
    appName: "YOUR_APP_NAME"
});
```


Configuration
-------------

Refer [our node.js documentation](https://docs.atatus.com/docs/application-monitoring/nodejs/application-installation-setup.html)
