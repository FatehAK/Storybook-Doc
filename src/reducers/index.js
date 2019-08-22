import { actions } from '../actions/index';
import { combineReducers } from 'redux';

//a helper higher order function
const taskStateReducer = (taskState) => {
    return (state, action) => {
        return {
            ...state,
            tasks: state.tasks.map(
                (task) => (task.id === action.id ? { ...task, state: taskState } : task)
            )
        };
    };
};

const tasksReducer = (state, action) => {
    switch (action.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer('TASK_ARCHIVED')(state, action);
        case actions.PIN_TASK:
            return taskStateReducer('TASK_PINNED')(state, action);
        default:
            return state;
    }
};

export default combineReducers({
    tasks: tasksReducer
});
