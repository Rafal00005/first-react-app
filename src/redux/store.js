import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './ListsRedux';
import columnsReducer from './ColumnsRedux';
import cardsReducer from './CardsRedux';
import searchStringReducer from './SearchStringRedux';

// combine subreducers
const subreducers = {
	lists: listsReducer,
	columns: columnsReducer,
	cards: cardsReducer,
	searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
