import { Action, ActionCreator, AnyAction } from "redux";

/**
 * action types
 */
export enum ActionTypes {
    UPDATE_ACCOUNT_NAME = "UPDATE_ACCOUNT_NAME",
    UPDATE_PERSONAL_ACCESS_TOKEN = "UPDATE_PERSONAL_ACCESS_TOKEN",
}

/**
 * actions
 */

export interface UpdateAccountNameAction extends Action {
    accountName: string;
}

export interface UpdatePersonalAccessTokenAction extends Action {
    personalAccessToken: string;
}

/**
 * action creators
 */

export const updateAccountName: ActionCreator<UpdateAccountNameAction> = (accountName: string) => ({  
    type: ActionTypes.UPDATE_ACCOUNT_NAME,
    accountName: accountName,
})

export const updatePersonalAccessToken: ActionCreator<UpdatePersonalAccessTokenAction> = (personalAccessToken: string) => ({  
    type: ActionTypes.UPDATE_PERSONAL_ACCESS_TOKEN,
    personalAccessToken: personalAccessToken,
})