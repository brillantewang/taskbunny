import { connect } from 'react-redux';
import SplashBody from './splash_body';
import { createTask } from '../actions/task_form_actions.js';

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
})

export default connect(
  null,
  mapDispatchToProps
)(SplashBody);
