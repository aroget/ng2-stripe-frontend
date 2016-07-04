import { ActionReducer, Action } from '@ngrx/store';

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const DEFAULT_STATE = 'DEFAULT_STATE';

export const notifications: ActionReducer<number> = (state: any = {}, {type, payload}) => {
    switch (type) {
        case (NEW_MESSAGE):
            return state = payload;
        case (DEFAULT_STATE):
            return state = {};
        default:
            return state;
    }
};


