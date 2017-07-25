import { combineReducers, Reducer } from 'redux';

import {
    ActionTypes,
    UpdateAccountNameAction,
    UpdatePersonalAccessTokenAction
} from "./Actions";

export const accountName: Reducer<string> = (state = "", action: UpdateAccountNameAction) => {
    switch(action.type) {
            case ActionTypes.UPDATE_ACCOUNT_NAME:
                return action.accountName;
            default:
                return state;
        }
}

export const personalAccessToken: Reducer<string> = (state = "", action: UpdatePersonalAccessTokenAction) => {
    switch(action.type) {
            case ActionTypes.UPDATE_PERSONAL_ACCESS_TOKEN:
                return action.personalAccessToken;
            default:
                return state;
        }
}

interface State {
    personalAccessToken: string,
    accountName: string,
}

export const reducer = combineReducers<State>({
    accountName,
    personalAccessToken
});