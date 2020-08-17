import {
    ADD_LOCATION,
    REMOVE_LOCATION
} from 'store/actions/types';

// initial state
let initialState: any = {
    items: []
}

const locationReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_LOCATION:
            state.items = [
                ...state.items,
                action.payload.item
            ];
            return Object.assign({}, state);
        
        case REMOVE_LOCATION:
            return Object.assign({}, state);
            
        default:
            return state;
    }
}

export default locationReducer;