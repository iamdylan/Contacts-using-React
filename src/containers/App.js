import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {setSearchField} from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component{
	constructor() {
		super()
		this.state = {
			contacts: []
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(respone => respone.json())
		.then(users=> this.setState({contacts: users}));
	}

	render(){
		const {contacts} = this.state;
		const {searchField, onSearchChange} = this.props;
		const filteredContacts = contacts.filter(contact =>{
			return contact.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return(
			<div className='tc'>
				<h1 className='f1'>Contacts</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<CardList contacts={filteredContacts}/>
				</Scroll>
			</div>
		);
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);