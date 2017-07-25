import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Auth } from "../models/Auth";

import { Config } from "../components/Config";

import "./Home.scss";



export interface Props extends RouteComponentProps<any> {
}

export class State {
}

export class Home extends React.Component<Props, State> {

    public render() {        
        return (
            <main className="view-home">
                <div className="config-container">
                    <Config/>
                </div>
            </main>
        );
    }
}