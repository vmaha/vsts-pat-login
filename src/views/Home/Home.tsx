import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Config } from "../../components/Config";
import { Auth } from "../../models/Auth";
import { fetchProjects } from "../../redux/Actions";
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