const newRouters = require('./news')
const siteRouters = require('./site')
const coursesRouters = require('./courses')
const meRouters = require('./me')
function route(app){
    app.use('/news', newRouters);
    app.use('/me', meRouters);
    app.use('/courses', coursesRouters);
    app.use('/',siteRouters)
}

module.exports = route;