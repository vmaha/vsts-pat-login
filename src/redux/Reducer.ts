import { combineReducers, Reducer, AnyAction } from 'redux';
import { Project } from "../models/Project";
import { ProjectState, State } from "./States";

import * as Actions from "./Actions";

export const accountName: Reducer<string> = (state = "", action: Actions.UpdateAccountNameAction) => {
    switch(action.type) {
        case Actions.UPDATE_ACCOUNT_NAME:
            return action.accountName;
        default:
            return state;
    }
}

export const personalAccessToken: Reducer<string> = (state = "", action: Actions.UpdatePersonalAccessTokenAction) => {
    switch(action.type) {
        case Actions.UPDATE_PERSONAL_ACCESS_TOKEN:
            return action.personalAccessToken;
        default:
            return state;
    }
}

const projectsInitialValue: ProjectState = { 
    isFetching: false, 
    projects: {}, 
    selectedProjectId: null
};

export const projects: Reducer<ProjectState> = (state = projectsInitialValue, action: AnyAction) => {
    switch(action.type) {
        case Actions.REQUEST_PROJECTS:
            return {
                selectedProjectId: null,
                isFetching: true,
                projects: {},
            };
        case Actions.RECEIVE_PROJECTS:
            let receiveProjectsAction = action as Actions.ReceiveProjectsAction;
            let projects: { [projectId: string]: Project } = {};
            receiveProjectsAction.projects.forEach(value=> {
                projects[value.id] = value;
            });
            return {
                selectedProjectId: null,
                isFetching: false,
                projects: projects,
            };
        case Actions.UPDATE_SELECTED_PROJECT:
            let updateSelectedProjectAction = action as Actions.UpdateSelectedProjectAction;
             return Object.assign({}, state, {
                 selectedProjectId: updateSelectedProjectAction.projectId,
             });
        default:
            return state;
    }
}

export const selectedProject: Reducer<string> = (state = "", action: Actions.UpdatePersonalAccessTokenAction) => {
    switch(action.type) {
        case Actions.UPDATE_PERSONAL_ACCESS_TOKEN:
            return action.personalAccessToken;
        default:
            return state;
    }
}


export const reducer = combineReducers<State>({
    accountName,
    personalAccessToken,
    projects,
});