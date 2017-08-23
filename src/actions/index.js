export const  ACTIONS_TYPES = {
    ADD_REMINDER: 'ADD_REMINDER',
    COMPLETE_REMINDER: 'COMPLETE_REMINDER',
    SET_VISIBILITY_FILTER:  'SET_VISIBILITY_FILTER'
}

export const addReminder = (text) => {
    const action = {
        type: ACTIONS_TYPES.ADD_REMINDER,
        text
    }
    console.log('action in addRemider', action);
    return action;
}

export const completeReminder = (id) => {
    const action = {
        type: ACTIONS_TYPES.COMPLETE_REMINDER,
        id
    }
    console.log('action in completeRemider', action);
    return action;
}

export const setVisibilityFilter = (filter) => {
    const action = {
        type: ACTIONS_TYPES.SET_VISIBILITY_FILTER,
        filter
    }
    console.log('action in setVisibilityFilter', action);
    return action;
}