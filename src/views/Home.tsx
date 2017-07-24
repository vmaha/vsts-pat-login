import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Auth } from "../models/Auth";

import "./Home.scss";



export interface Props extends RouteComponentProps<any> {
}

export class State {
}

export class Home extends React.Component<Props, State> {

    public componentDidMount() {
        let auth = new Auth();
        auth.loginIfNeeded();
        let myPatToken = auth.personalAccessToken;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', "https://mseng.visualstudio.com/b924d696-3eae-4116-8443-9a18392d8544/_apis/wit/queries/1ef8a73b-6e23-4431-baa8-e6df282f9a0e?api-version=1.0&%24depth=2&%24expand=minimal");
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa("" + ":" + myPatToken));
        xhr.responseType = 'json';
        
        xhr.onload = () => {
            console.log(xhr.status);
        };
        xhr.send();
    }

    public render() {        
        return (
            <main className="view-home">
            </main>
        );
    }
}