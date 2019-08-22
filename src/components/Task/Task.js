import React from 'react';
import PropTypes from 'prop-types';

function Task({ task: { id, title, state }, archiveTask, pinTask }) {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => archiveTask(id)} />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" style={{ textOverflow: 'ellipsis' }} />
      </div>

      <div className="actions" onClick={(evt) => evt.stopPropagation()}>
        {(state !== 'TASK_ARCHIVED') && (
          <a onClick={() => pinTask(id)}>
            <span className="icon-star" />
          </a>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  archiveTask: PropTypes.func,
  pinTask: PropTypes.func,
};

export default Task;
