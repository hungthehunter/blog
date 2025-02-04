const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../util/mongoose')

class MeController {
    // [GET] /news
    storedCourses(req, res, next) {
      Course.find({deletedAt: null})
      .then(courses => res.render('me/stored/courses', {
        courses: multipleMongooseToObject(courses),
        sort: req.query
      }))
      .catch(next)
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next){
      Course.find({})
      .then(courses => res.render('me/stored/courses',{
        courses: multipleMongooseToObject(courses)
      }))
      .catch(next)
    }
  }
  
  module.exports = new MeController();
  