import { createStore } from 'redux';
import rootReducer from './reducers/index';

const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

const store = createStore(rootReducer, { tasks: defaultTasks });

export default store;
