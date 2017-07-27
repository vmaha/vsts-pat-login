import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { Repo } from "../../models/Repo";
import { State } from "../States";
import * as Fetch from "./Fetch";
import * as ListActions from "./ListActions";

/**
 * requestRepos
 */
export const REQUEST_REPOS = "REQUEST_REPOS";

export const requestRepos = () => ({ type: REQUEST_REPOS });

/**
 * receiveRepos
 */
export const RECEIVE_REPOS = "RECEIVE_REPOS";

export interface ReceiveReposAction extends ListActions.ReceiveAction<Repo>{
    parentProjectId: string,
}

export const receiveRepos: ActionCreator<ReceiveReposAction> = (repos: Repo[], projectId: string) => ({  
    type: RECEIVE_REPOS,
    items: repos,
    parentProjectId: projectId,
});

/**
 * updateSelectedRepo
 */

export const UPDATE_SELECTED_REPO = "UPDATE_SELECTED_REPO";

export interface UpdateSelectedRepoAction extends ListActions.UpdateSelectedAction {}

export const updateSelectedRepo = ListActions.getUpdateSelectedActionCreator(UPDATE_SELECTED_REPO);

/**
 * fetchRepos
 */

const fetchReposAction : ThunkAction<Promise<Repo[]>, State, {}> = (dispatch, getState) => {
    dispatch(requestRepos());

    let instance = `${getState().accountName}.visualstudio.com`;
    let project = getState().projects.selectedId;
    let version = `1.0`;
    let url = `https://${instance}/DefaultCollection/${project}/_apis/git/repositories?api-version=${version}`

    return (
        fetch(url, Fetch.createInit(getState))
        .then(response => response.json())
        .then(json => {            
            let repos = (json.value as any[])
                .map<Repo>(jsonValue => ({
                    name: jsonValue.name,
                    id: jsonValue.id
                }));

            dispatch(receiveRepos(repos, project));
            return repos;
        })
    );
}

export const fetchRepos = () => fetchReposAction;