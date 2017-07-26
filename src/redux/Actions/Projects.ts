import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { Project } from "../../models/Project";
import { State } from "../States";
import * as Fetch from "./Fetch";
import * as ListActions from "./ListActions";

/**
 * requestProjects
 */
export const REQUEST_PROJECTS = "REQUEST_PROJECTS";

export const requestProjects = () => ({ type: REQUEST_PROJECTS });

/**
 * receiveProjects
 */
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";

export interface ReceiveProjectsAction extends ListActions.ReceiveAction<Project>{}

export const receiveProjects = ListActions.getReceiveActionCreator(RECEIVE_PROJECTS);

/**
 * updateSelectedProject
 */

export const UPDATE_SELECTED_PROJECT = "UPDATE_SELECTED_PROJECT";

export interface UpdateSelectedProjectAction extends ListActions.UpdateSelectedAction {}

export const updateSelectedProject = ListActions.getUpdateSelectedActionCreator(UPDATE_SELECTED_PROJECT);

/**
 * fetchProjects
 */

const fetchProjectsAction : ThunkAction<Promise<Project[]>, State, {}> = (dispatch, getState) => {
    dispatch(requestProjects());

    let instance = `${getState().accountName}.visualstudio.com`;
    let version = `1.0`;
    let url = `https://${instance}/DefaultCollection/_apis/projects?api-version=${version}`

    return (
        fetch(url, Fetch.createInit(getState))
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
