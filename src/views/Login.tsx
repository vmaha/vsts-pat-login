import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Label } from "office-ui-fabric-react/lib/Label";
import { TextField } from "office-ui-fabric-react/lib/TextField";

import "./Login.scss";

import { Auth } from "../models/Auth";

export interface Props extends RouteComponentProps<any> {
    redirectUrl: string;
}

export interface State {
    accountName: string;
    personalAccessToken: string;
}

// Auth using Personal Access Token (PAT)
// TODO - Check that token is actually valid (ping a random API?)
// TODO - Provide a way to logout
export class Login extends React.Component<Props, State> {

    state = { 
        accountName: "",
        personalAccessToken: ""
    };

    private saveFormData() {
        let auth = new Auth();     
        auth.accountName = this.state.accountName;
        auth.personalAccessToken = this.state.personalAccessToken;   
    }

    public render() {
        return (
            <main>
                <form action={this.props.redirectUrl} onSubmit={() => this.saveFormData()}>
                    <TextField 
                        label="Account" 
                        value={this.state.accountName} 
                        onChanged={newValue => this.setState({accountName: newValue})}
                    />
                    <TextField 
                        label="Personal access token" 
                        value={this.state.personalAccessToken}
                        onChanged={newValue => this.setState({personalAccessToken: newValue})}
                    />
                    <button type="submit">Login</button>
                </form>
            </main>
        );
    }
}