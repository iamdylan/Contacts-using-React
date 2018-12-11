import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {contacts} from '../contacts';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
	constructor() {
		super()
		this.state = {
			contacts: contacts,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		
	}
	render(){
		const {contacts, searchfield} = this.state;
		const filteredContacts = contacts.filter(contact =>{
			return contact.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return(
			<div className='tc'>
				<h1 className='f1'>Contacts</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList contacts={filteredContacts}/>
				</Scroll>
			</div>
		);
	}
	
}

export default App;