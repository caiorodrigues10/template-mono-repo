const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@template/design-system",
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
