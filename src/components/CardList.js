import React from 'react';
import Card from './Card';

const CardList = ({contacts}) => {
	
	return(
		<React.Fragment>
			{
			contacts.map((user, i) => {
				return (
					<Card 
						key={contacts[i].id} 
						id={contacts[i].id} 
						name={contacts[i].name} 
						email={contacts[i].email}
						phone={contacts[i].phone}
					/>
				);
			})
		}
		</React.Fragment>
	);
}

export default CardList;