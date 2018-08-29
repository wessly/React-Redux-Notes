import React, { Component } from 'react';
import { connect } from "react-redux";
import { ADD_TEXT, REM_TEXT } from './actions/actions';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      inputBox: ''
    }

    this.onChange = this.onChange.bind(this);
    this.addNote = this.addNote.bind(this);
    this.remNote = this.remNote.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNote(e) {
    e.preventDefault();
    this.props.addNote(this.state.inputBox);
    this.setState({
      inputBox: ''
    });
  }

  remNote(e) {
    this.props.remNote(e.target.id)
  }

  render() {
    return (
      <div>
        <center>
          <br />
          <div className="ui focus input">
            <form 
              onSubmit={this.addNote}
              className="ui form">
              <input
                type="text"
                name="inputBox"
                onChange={this.onChange}
                value={this.state.inputBox}
              />
              <button
                onClick={this.addNote}
                className="ui primary button">
                Add now
              </button>
            </form>
          </div>

          <div className="ui list">
            {this.props.notes.map((note, i) => {
              return (
                <div
                  key={i}
                  id={i}
                  className="item">
                  {note.text}
                  <button
                    onClick={this.remNote}
                    className="ui red mini button">
                    x
                  </button>
                </div>
              );
            })}
          </div>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: (text) => dispatch({
      type: ADD_TEXT,
      text
    }),
    remNote: (index) => dispatch({
      index,
      type: REM_TEXT
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
