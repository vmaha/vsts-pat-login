import { Project } from "../models/Project";

export interface ProjectState {
    isFetching: boolean,
    selectedProjectId: string,    
    projects: {
        [projectId: string]: Project
    },
}

export interface State {
    personalAccessToken: string,
    accountName: string,    
    projects: ProjectState,
}