import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Label } from "office-ui-fabric-react/lib/Label";
import { TextField } from "office-ui-fabric-react/lib/TextField";

import "./Login.scss";

import { Auth } from "../models/Auth";

export interface Props extends RouteComponentProps<any> {
    redirectUrl: string;
}

export class State {
}

// Auth using Personal Access Token (PAT)
// TODO - Check that token is actually valid (ping a random API?)
// TODO - Provide a way to logout
export class Login extends React.Component<Props, State> {

    public render() {
        return (
            <main>
                <form action={this.props.redirectUrl}>
                    <TextField label="Account" placeholder="eg. contoso.visualstudio.com"/>
                    <TextField label="Personal access token" type="password"/>
                    <button type="submit">Login</button>
                </form>
            </main>
        );
    }
}