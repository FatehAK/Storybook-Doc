import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskList from '../TaskList/TaskList';

export function PureInboxScreen({ error }) {
    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad">
                        <div className="title-message">Oh no!</div>
                        <div className="subtitle-message">Something went wrong</div>
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">TaskBox</span>
                </h1>
            </nav>
            <TaskList />
        </div>
    );
}

PureInboxScreen.propTypes = {
    error: PropTypes.bool
};

PureInboxScreen.defaultProps = {
    error: false
};

const mapStatetoProps = (state) => ({
    error: state.error
});

export default connect(mapStatetoProps, {})(PureInboxScreen);
