import * as React from "react";
import "./Login.scss";

export interface State {
}

export interface Props {
}

export class Login extends React.Component<Props, State> {

    public render() {
        return (
            <form action="http://www.google.com">
                <label>Account</label>
                <input type="text"></input>
                <label>Personal Access Token</label>
                <input type="password" name="password"></input>
                <button type="submit">Login</button>
            </form>
        );
    }
}