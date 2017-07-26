import { Action, ActionCreator } from "redux";

export const UPDATE_PERSONAL_ACCESS_TOKEN = "UPDATE_PERSONAL_ACCESS_TOKEN";

export interface UpdatePersonalAccessTokenAction extends Action {
    personalAccessToken: string;
}

export const updatePersonalAccessToken: ActionCreator<UpdatePersonalAccessTokenAction> = (personalAccessToken: string) => ({  
    type: UPDATE_PERSONAL_ACCESS_TOKEN,
    personalAccessToken: personalAccessToken,
});