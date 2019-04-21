import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from './actions/items';

class App extends Component {
	handleOnClick = (e) => {
		this.props.addItem();
	};

	render() {
		return (
			<div className='App'>
				<button onClick={(event) => this.handleOnClick(event)}>Click</button>
				<p>{this.props.numberOfItems}</p>
				<p>Random Count that Ryan Added: {this.props.count}</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
        items: state.items,
        numberOfItems: state.items.length,
        count: state.count
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: () => {
			dispatch(addItem());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Can Abstract with below
// export default connect(mapStateToProps, { addItem })(App);

// Go an extra step and get rid of mapStateToProps function with below
// export default connect(state => ({ items: state.items }), { addItem })(App);

// ABSTRACT ONE MORE TIME WITH BELOW, DON'T NEED mapDispatchToProps
// By default mapDispatchToProps is just dispatch => ({ dispatch }).
// So if you don't specify the second argument to connect(), you'll get dispatch injected as a prop in your component.

// export default connect(state => ({ items: state.items }))(App);