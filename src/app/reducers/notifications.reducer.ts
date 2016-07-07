import { ActionReducer, Action } from '@ngrx/store';

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const DEFAULT_STATE = 'DEFAULT_STATE';

export interface NotificationsState {
    body: string;
    class: string;
}

export const initialState: NotificationsState = {
    body: '',
    class: ''
};


export function notifications (state= initialState, action: Action ): NotificationsState {
    switch (action.type) {
        case (NEW_MESSAGE):
            return Object.assign({}, state, { body : action.payload.body, class: action.payload.class });
        case (DEFAULT_STATE):
            return initialState;
        default:
            return state;
    }
};


// import { ActionReducer, Action } from '@ngrx/store';

// export const ADD_CREDIT = 'ADD_CREDIT';
// export const REMOVE_CREDIT = 'REMOVE_CREDIT';

// export interface CreditState {
//     value: number;
// }

// const initialState: CreditState = {
//     value: 0
// };

// export function credit (state = initialState, action: Action): CreditState {
//     switch (action.type) {
//         case (ADD_CREDIT):
//             return Object.assign({}, state, { value: state.value + (action.payload / 100) });
//         default:
//             return state;
//     }
// }



