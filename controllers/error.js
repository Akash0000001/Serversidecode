const path=require("path")
const rootDir=require("../util/path")
module.exports=(req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found',path:"/" });
  }
  