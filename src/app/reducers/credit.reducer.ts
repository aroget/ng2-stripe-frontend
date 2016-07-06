import { ActionReducer, Action } from '@ngrx/store';

export const ADD_CREDIT = 'ADD_CREDIT';
export const REMOVE_CREDIT = 'REMOVE_CREDIT';

export interface CreditState {
    value: number;
}

const initialState: CreditState = {
    value: 0
};

export function credit (state = initialState, action: Action): CreditState {
    switch (action.type) {
        case (ADD_CREDIT):
            return Object.assign({}, state, { value: state.value + (action.payload / 100) });
        default:
            return state;
    }
}

