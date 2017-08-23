import { ACTIONS_TYPES } from '../actions';
import { combineReducers } from 'redux';
const reminder = action => {
    return {
        text: action.text,
        completed: false,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ACTIONS_TYPES.ADD_REMINDER:
            reminders = [...state, reminder(action)];
            return reminders;
        case 'COMPLETE_REMINDER':
            return state.map((reminder) => {
                if (reminder.id === action.id) {
                    return Object.assign({}, reminder, {
                        completed: !reminder.completed
                    })
                }
                return reminder
            })
        default:
            return state;
    }
}

const visibilityFilter = (state = [], action) => {
    switch (action.type) {
        case ACTIONS_TYPES.SET_VISIBILITY_FILTER:
            console.log('visibility as state', action.filter);
            return action.filter;
        default:
            return state || "SHOW_ALL";
    }
}

export default combineReducers({ reminders, visibilityFilter });