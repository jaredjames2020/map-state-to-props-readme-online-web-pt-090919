import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux'; /* code change */
=======
import { connect } from 'react-redux';
>>>>>>> 9af6cc2823643d6fdce1b0db4ea51c21cd043e59
import './App.css';
 
class App extends Component {
  handleOnClick = event => {
    this.props.increaseCount();
  };
 
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <button onClick={() => this.handleOnClick()}>
          Click
        </button>
=======
        <button onClick={this.handleOnClick}>Click</button>
>>>>>>> 9af6cc2823643d6fdce1b0db4ea51c21cd043e59
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}
 
const mapStateToProps = state => {
  return {
    items: state.items
  };
};
 
const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
  };
};
<<<<<<< HEAD

// start of code change
const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps)(App);
=======
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
>>>>>>> 9af6cc2823643d6fdce1b0db4ea51c21cd043e59
