import { Project } from "../models/Project";
import { Repo } from "../models/Repo";

export interface ListState<T> {
    isFetching: boolean,    
    selectedId: string,    
    items: {
        [id: string]: T
    },    
}

export interface RepoState {
    parentProjectId: string;
    childRepos: ListState<Repo>;
}

export interface State {
    personalAccessToken: string,
    accountName: string,    
    projects: ListState<Project>,
    repos: RepoState,
}