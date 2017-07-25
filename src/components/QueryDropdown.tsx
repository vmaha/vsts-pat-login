import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";



export interface Props {
}

export class State {
}

export class QueryDropdown extends React.Component<Props, State> {

    public componentDidMount() {
        
    }

    public render() {        
        return <Dropdown label="Query" placeHolder="Select query"/>;
    }
}