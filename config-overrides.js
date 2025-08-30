const JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = function override(config) {
  if (process.env.NODE_ENV === "production") {
    config.plugins.push(
      new JavaScriptObfuscator(
        {
          rotateStringArray: true,
          stringArray: true,
          stringArrayEncoding: ['rc4'],
          stringArrayThreshold: 0.75,
        },
        ['**/node_modules/**']
      )
    );
  }
  return config;
};
