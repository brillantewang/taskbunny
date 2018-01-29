import { connect } from 'react-redux';
import SplashHead from './splash_head';
import { createTask } from '../actions/task_form_actions.js';

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
})

export default connect(
  null,
  mapDispatchToProps
)(SplashHead);
