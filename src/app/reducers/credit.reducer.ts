import { ActionReducer, Action } from '@ngrx/store';

export const ADD_CREDIT = 'ADD_CREDIT';

export const credit: ActionReducer<number> = (state = 0, {type, payload}) => {
    switch (type) {
        case (ADD_CREDIT):
            return state += (payload / 100);
        default:
            return state;
    }
};


