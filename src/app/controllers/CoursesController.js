const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CoursesController {
  // [POST] /store
  store(req, res, next) {
    const formData = req.body;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {
        console.log('Dữ liệu từ form:' ,formData)
        res.send('Internal service error')
      });

  }

  // [GET] /create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [GET] /:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/course", {
          course: mongooseToObject(course),
        });
      })
      .catch((error) => next(error));
  }

   //GET /course/edit/:id
   edit(req, res, next) {
    Course
      .findById(req.params.id)
      .then((data) =>
        res.render("courses/edit", { course: mongooseToObject(data) })
      )
      .catch((err) => console.log("Log : err", err));
  }

    //PUT /course/edit/:id
    update(req, res, next) {
      Course
        .updateOne({ _id: req.params.id }, req.body)
        .then((data) => res.redirect("/me/stored/courses"))
        .catch((err) => console.log("Log : err", err));
    }

    //DELETE /course/:id
    destroy(res,req,next){
      Course
      .delete({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
    }

    
}

module.exports = new CoursesController();
