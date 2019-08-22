import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import { archiveTask, pinTask } from '../../actions/index';

//exporting our presentation component seperately
export function PureTaskList({ loading, tasks, archiveTask, pinTask }) {
    const events = {
        archiveTask,
        pinTask
    };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span>
                <span>cool</span>
                <span>state</span>
            </span>
        </div>
    );

    if (loading) {
        return <div className="list-items">
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
        </div>;
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        )
    }

    //show pinned task first
    const tasksInOrder = [
        ...tasks.filter((task) => task.state === 'TASK_PINNED'),
        ...tasks.filter((task) => task.state !== 'TASK_PINNED')
    ];

    return (
        <div className="list-items">
            {(tasksInOrder.map((task) => (
                <Task key={task.id} task={task} {...events} />
            )))}
        </div>
    );
}

PureTaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    pinTask: PropTypes.func.isRequired,
    archiveTask: PropTypes.func.isRequired
};

PureTaskList.defaultProps = {
    loading: false
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, { archiveTask, pinTask })(PureTaskList);
