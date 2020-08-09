const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/saroj/Documents/publicis-sapient/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/saroj/Documents/publicis-sapient/src/pages/404.js"))),
  "component---src-pages-groups-js": hot(preferDefault(require("/home/saroj/Documents/publicis-sapient/src/pages/groups.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/saroj/Documents/publicis-sapient/src/pages/index.js")))
}

