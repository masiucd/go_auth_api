import * as model from '../models/teachers-model.js';
import TeacherListView from '../views/teachers-view.js';

const teachersController = function() {
  // 1. Load teachers.
  model.loadTeachers();
  // 2. Render the teachers list.
  TeacherListView.render(model.state.teachers);
}

teachersController();