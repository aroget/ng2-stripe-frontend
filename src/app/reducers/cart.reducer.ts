import { ActionReducer, Action } from '@ngrx/store';

export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const DEFAULT_CART_STATE = 'DEFAULT_CART_STATE';

export interface CartState {
    items: Array<any>;
}

const initialState: CartState[] = [];

export function cart (state = initialState, action: Action) {
    console.log(`${action.type}, ${action.payload}`);

    switch (action.type) {
        case (ADD_CART_ITEM):
            return [
                ...state,
                action.payload
            ];
        case (REMOVE_CART_ITEM):
            // return Object.assign({}, state, { value: state.value - (action.payload / 100) });
        case (DEFAULT_CART_STATE):
            return initialState;
        default:
            return state;
    }
}

