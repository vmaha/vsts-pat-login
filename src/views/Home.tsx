import * as React from "react";
import { RouteComponentProps } from "react-router";

import "./Home.scss";

export interface Props extends RouteComponentProps<any> {
}

export class State {
}

export class Home extends React.Component<Props, State> {

    public render() {  
        return <main className="view-home">hello world</main>;        
    }
}