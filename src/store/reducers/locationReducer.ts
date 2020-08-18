import {
    ADD_LOCATION,
    REMOVE_LOCATION
} from 'store/actions/types';

// initial state
let initialState: any = {
    items: []
}

const checkItem = (state: any, id: number, name: string) => {
    let data = state.items;
    if (data.length === 0) {
        return { flag: -1};
    } else {
        const index = data.findIndex((x: any) => x.asl === id && x.name === name);

        if (index === -1) {
            return { flag: -1 };
        } else {
            return {
                flag: 1,
                indexOfItem: index
            };
        }
    }
};
  
const locationReducer = (state = initialState, action: any) => {
    let check: any;

    switch(action.type) {
        case ADD_LOCATION:
            let id = action.payload.item.asl,
                name = action.payload.item.name;
            check = checkItem(state, id, name);

            if (check.flag === -1) {
                state.items = [
                    ...state.items,
                    action.payload.item
                ];
                return Object.assign({}, state);
            } else {
                return Object.assign({}, state);
            }
        
        case REMOVE_LOCATION:
            for (let i = 0; i < state.items.length; i++) {
                if (state.items[i].asl === action.payload.id
                    && state.items[i].name === action.payload.name
                ) {
                    state.items.splice(i, 1);
                    break;
                }
            }
            return Object.assign({}, state);
            
        default:
            return state;
    }
}

export default locationReducer;