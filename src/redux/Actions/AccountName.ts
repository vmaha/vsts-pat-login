import { Action, ActionCreator } from "redux";

export const UPDATE_ACCOUNT_NAME = "UPDATE_ACCOUNT_NAME";

export interface UpdateAccountNameAction extends Action {
    accountName: string;
}

export const updateAccountName: ActionCreator<UpdateAccountNameAction> = (accountName: string) => ({  
    type: UPDATE_ACCOUNT_NAME,
    accountName: accountName,
});