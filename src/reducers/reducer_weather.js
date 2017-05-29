import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
	console.log('Action Received', action);
	switch (action.type){
		case FETCH_WEATHER:
			return [action.payload.data, ...state ]; //not mutating the original state, but returning a new instance of state (concat > push)
	}
	return state;

}