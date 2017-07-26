import { combineReducers, Reducer, AnyAction } from 'redux';
import { Project } from "../models/Project";
import { State, ListState, RepoState} from "./States";

import * as AccountNameActions from "./Actions/AccountName";
import * as ListActions from "./Actions/ListActions";
import * as PeronsalAccessTokenActions from "./Actions/PersonalAccessToken";
import * as ProjectsActions from "./Actions/Projects";
import * as ReposActions from "./Actions/Repos";


export const accountName: Reducer<string> = (state = "", action: AccountNameActions.UpdateAccountNameAction) => {
    switch(action.type) {
        case AccountNameActions.UPDATE_ACCOUNT_NAME:
            return action.accountName;
        default:
            return state;
    }
}

export const personalAccessToken: Reducer<string> = (state = "", action: PeronsalAccessTokenActions.UpdatePersonalAccessTokenAction) => {
    switch(action.type) {
        case PeronsalAccessTokenActions.UPDATE_PERSONAL_ACCESS_TOKEN:
            return action.personalAccessToken;
        default:
            return state;
    }
}

function createListReducer<T extends ListActions.ListItem>(requestActionType: string, receiveActionType: string, updateActionType: string): Reducer<ListState<T>> {
    return ((
        state: ListState<T> =  { isFetching: false, items: {}, selectedId: null },
        action: AnyAction) =>
        {
            switch (action.type) {
                case requestActionType: 
                    return {
                        selectedId: null,
                        isFetching: true,
                        items: {},
                    };
                case receiveActionType: 
                    let receiveAction = action as ListActions.ReceiveAction<T>;
                    let items: { [id: string]: T } = {};
                    receiveAction.items.forEach(item => {
                        items[item.id] = item;
                    });
                    return {
                        selectedId: null,
                        isFetching: false,
                        items: items,
                    };
                case updateActionType:
                    let updateSelectedAction = action as ListActions.UpdateSelectedAction;
                    return Object.assign({}, state, {
                        selectedId: updateSelectedAction.id,
                    });
                default:
                    return state;
            }
        }
    );
}

export const projects = createListReducer<Project>(
    ProjectsActions.REQUEST_PROJECTS,
    ProjectsActions.RECEIVE_PROJECTS,
    ProjectsActions.UPDATE_SELECTED_PROJECT
);

const repos = (function () {

    const parentProjectId: Reducer<string> = (state = null, action: AnyAction) => {
        switch(action.type) {
            case ReposActions.RECEIVE_REPOS:
                let receivedReposAction = action as ReposActions.ReceiveReposAction;
                return receivedReposAction.parentProjectId;
            default:
                return state;
        }
    }

    const childRepos = createListReducer<Project>(
        ReposActions.REQUEST_REPOS,
        ReposActions.RECEIVE_REPOS,
        ReposActions.UPDATE_SELECTED_REPO
    );

    const repos = combineReducers<RepoState>({
        parentProjectId,
        childRepos
    });

    return repos;
})();



export const reducer = combineReducers<State>({
    accountName,
    personalAccessToken,
    projects,
    repos
});