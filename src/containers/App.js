import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import {setSearchField, requestContacts} from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchContacts.searchField,
		contacts: state.requestContacts.contacts,
		isPending: state.requestContacts.isPending,
		error: state.requestContacts.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestContacts: () => dispatch(requestContacts())
	}
}

class App extends Component{
	componentDidMount(){
		this.props.onRequestContacts();
	}

	render(){
		const { searchField, onSearchChange, contacts, isPending } = this.props;
		const filteredContacts = contacts.filter(contact =>{
			return contact.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			<h1 className='tc'>Loading...</h1> :
			(
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
