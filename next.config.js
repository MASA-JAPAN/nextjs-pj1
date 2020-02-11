const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: true
});

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: "empty",
//         net: "empty"
//       };
//     }

//     return config;
//   }
// };
