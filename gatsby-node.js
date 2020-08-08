const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  createPage({
    path:"/:id",
    matchPath: "/*",
    component: path.resolve('src/pages/groups.js'),
  })
}