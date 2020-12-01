import * as model from '../models/courses-model.js';
import courseListView from '../views/courses-view.js';
import CourseDetailView from '../views/course-detail-view.js';
import * as dialogController from '../controllers/dialog-controller.js';

const coursesController =  function() {

  // 1. Load courses.
  model.loadCourses();
  // 2. Rendering the courses list.
  courseListView.renderCourses(model.state.courses);
  // 3. Connect to the views publisher.
  courseListView.addHandlerClickRow(CoursesDetails);
};

const CoursesDetails = function(courseNo){
  model.findCourse(courseNo);
  CourseDetailView.renderDialog(model.state.course);
  CourseDetailView.addHandlerCloseDialog(dialogController.closeDialog);
}
const init = function() {
  courseListView.addHandlerRender(coursesController);  
};

init();

