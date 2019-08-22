export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK'
};

//action creators
export const archiveTask = (id) => ({
    type: actions.ARCHIVE_TASK,
    id: id
});

export const pinTask = (id) => ({
    type: actions.PIN_TASK,
    id: id
});
