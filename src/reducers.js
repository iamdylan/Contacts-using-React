import {
    CHANGE_SEARCH_FIELD,
    REQUEST_CONTACTS_PENDING,
    REQUEST_CONTACTS_SUCCESS,
    REQUEST_CONTACTS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchContacts = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD: 
            return Object.assign({},state,{searchField: action.payload});
        default:
            return state;
    }
}

const initialStateContacts = {
    isPending: false,
    contacts: [],
    error: ''
}
export const requestContacts = (state=initialStateContacts, action={}) => {
    switch(action.type){
        case REQUEST_CONTACTS_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_CONTACTS_SUCCESS:
            return Object.assign({}, state, {contacts: action.payload, isPending: false});
        case REQUEST_CONTACTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}