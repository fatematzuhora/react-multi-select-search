import {
    ADD_LOCATION,
    REMOVE_LOCATION
} from 'store/actions/types';

export const addLocation = (item: any) => {
    return {
        type: ADD_LOCATION,
        payload: {
            item: item
        }
    }
}

export const removeLocation = (id: number, name: string) => {
    return {
        type: REMOVE_LOCATION,
        payload: {
            id: id,
            name: name
        }
    }
}