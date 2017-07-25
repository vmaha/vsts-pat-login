import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";

import { QueryDropdown } from "./QueryDropdown";

export interface Props {
}

export class State {
}

export class Config extends React.Component<Props, State> {

    public render() {        
        return (
            <div className="config">
                <TextField label="Title" defaultValue="Query Tile"/>
                <QueryDropdown />
            </div>
        );
    }
}