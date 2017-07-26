import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Config } from "./Presentation/Config";
import { Auth } from "../../models/Auth";
import { fetchProjects } from "../../redux/Actions/Projects";
import { fetchRepos } from "../../redux/Actions/Repos";
import { store } from "../../redux/Store";

import { HomeProjectComboBox } from "./Containers/HomeProjectComboBox";
import "./Home.scss";

export interface Props extends RouteComponentProps<any> {
}

export class State {
}

export class Home extends React.Component<Props, State> {

    public componentDidMount() {
        store.dispatch(fetchProjects());

        store.subscribe(() => {
            let isAlreadyFetching = store.getState().repos.childRepos.isFetching;
            if (isAlreadyFetching) {
                return;
            }
            
            let projectOfRepos = store.getState().repos.parentProjectId;
            let currentProject = store.getState().projects.selectedId;
            if (projectOfRepos != currentProject) {
                store.dispatch(fetchRepos());
            }
        });
    }

    public render() {
        let auth = new Auth();
        auth.loginIfNeeded();
        return (
            <main className="view-home">
                <div className="config-container left">
                    <div>
                        <HomeProjectComboBox/>
                    </div>
                </div>
                <div className="config-container right">                    
                    <Config/>
                </div>
            </main>
        );
    }
}