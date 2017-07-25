import { Action, ActionCreator, AnyAction, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { Project } from "../models/Project";
import { State } from "./States";

/**
 * updateAccountName
 */

export const UPDATE_ACCOUNT_NAME = "UPDATE_ACCOUNT_NAME";

export interface UpdateAccountNameAction extends Action {
    accountName: string;
}

export const updateAccountName: ActionCreator<UpdateAccountNameAction> = (accountName: string) => ({  
    type: UPDATE_ACCOUNT_NAME,
    accountName: accountName,
});

/**
 * updatePersonalAccessToken
 */

export const UPDATE_PERSONAL_ACCESS_TOKEN = "UPDATE_PERSONAL_ACCESS_TOKEN";

export interface UpdatePersonalAccessTokenAction extends Action {
    personalAccessToken: string;
}

export const updatePersonalAccessToken: ActionCreator<UpdatePersonalAccessTokenAction> = (personalAccessToken: string) => ({  
    type: UPDATE_PERSONAL_ACCESS_TOKEN,
    personalAccessToken: personalAccessToken,
});

/**
 * requestProjects
 */
export const REQUEST_PROJECTS = "REQUEST_PROJECTS";

export const requestProjects = () => ({ type: REQUEST_PROJECTS });

/**
 * receiveProjects
 */
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";

export interface ReceiveProjectsAction extends Action {
    projects: Project[],
}

export const receiveProjects: ActionCreator<ReceiveProjectsAction> = (projects: Project[]) => ({  
    type: RECEIVE_PROJECTS,
    projects: projects,
});

/**
 * fetchProjects
 */

const fetchProjectsAction : ThunkAction<Promise<Project[]>, State, {}> = (dispatch, getState) => {
    dispatch(requestProjects());

    let instance = `${getState().accountName}.visualstudio.com`;
    let version = `1.0`;
    let url = `https://${instance}/DefaultCollection/_apis/projects?api-version=${version}`

    let init = {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa("" + ":" + getState().personalAccessToken),
            'Content-Type': 'application/json'
        }
    };

    return (
        fetch(url, init)
        .then(response => response.json())
        .then(json => {
            
            let projects = (json.value as any[])
                .map<Project>(jsonValue => ({
                    name: jsonValue.name,
                    id: jsonValue.id
                }));

            dispatch(receiveProjects(projects));
            return projects;
        })
    );
}

export const fetchProjects = () => fetchProjectsAction;

/**
 * updateSelectedProject
 */

export const UPDATE_SELECTED_PROJECT = "UPDATE_SELECTED_PROJECT";

export interface UpdateSelectedProjectAction extends Action {
    projectId: string;
}

export const updateSelectedProject: ActionCreator<UpdateSelectedProjectAction> = (projectId: string) => ({  
    type: UPDATE_SELECTED_PROJECT,
    projectId: projectId,
});