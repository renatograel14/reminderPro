import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addReminder, completeReminder, setVisibilityFilter } from '../actions';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import './App.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    addRemider() {
        this.props.addReminder(this.state.text);
    }

    completeReminder(id) {
        this.props.completeReminder(id)
    }

    toogleVisibilityFilter(filter) {
        this.props.setVisibilityFilter(filter)
    }

    renderRemindersList() {
        const { reminders, visibilityFilter } = this.props.globalState;
        return (
            <ul className="list-group reminders-list">
                {
                    reminders.filter((reminder) => {
                        switch (visibilityFilter) {
                            case 'SHOW_COMPLETE':
                                return reminder.completed;
                            case 'SHOW_TO_COMPLETE':
                                return !reminder.completed;
                            default:
                                return true;
                        }
                    }).map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <span>{reminder.text}</span>
                                <span onClick={() => this.completeReminder(reminder.id)} className={`glyphicon glyphicon glyphicon-${reminder.completed ? 'check' : 'unchecked'} mark-complete-icon`}></span>
                            </li>
                        )

                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <main className="container App">
                <header>
                    <h1 className="app-title">Remider Pro</h1>
                </header>
                <article className="form-inline">
                    <section className="form-group reminder-input">
                        <input type="text"
                            placeholder="I have to..."
                            className="form-control"
                            onChange={event => this.setState({ text: event.target.value })} />
                    </section>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addRemider()}>Add Reminder</button>
                    <hr />

                    <DropdownButton
                        id="bg-nested-dropdown"
                        className="glyphicon" noCaret
                        title="&#xe138;"
                        onSelect={eventKey => this.toogleVisibilityFilter(eventKey)}>
                        <MenuItem eventKey="SHOW_ALL">All</MenuItem>
                        <MenuItem eventKey="SHOW_COMPLETE">Completed</MenuItem>
                        <MenuItem eventKey="SHOW_TO_COMPLETE">To complete</MenuItem>
                    </DropdownButton>
                    <div className="clr"></div>
                    {this.renderRemindersList()}
                </article>
            </main>
        )
    }
}

function mapStateToProps(globalState) {
    return {
        globalState
    }
}

export default connect(mapStateToProps, { addReminder, completeReminder, setVisibilityFilter })(App);