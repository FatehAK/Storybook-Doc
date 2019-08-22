import React from 'react';
import ReactDOM from 'react-dom';
import { PureTaskList } from './TaskList';
import { withPinnedTasks } from './TaskList.stories';

it('renders pinned tasks at the start of the list', () => {
    const div = document.createElement('div');
    const events = { archiveTask: jest.fn(), pinTask: jest.fn() };
    ReactDOM.render(<PureTaskList tasks={withPinnedTasks} {...events} />, div);
    //we expect the Task 6 to be the first task in the list
    const firstTask = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
    expect(firstTask).not.toBe(null);
    ReactDOM.unmountComponentAtNode(div);
});
