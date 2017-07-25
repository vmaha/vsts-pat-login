import * as React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

import { Project } from "../models/Project";

export interface Props {
    projects: Project[];
}

export class State {
}

export class ProjectDropdown extends React.Component<Props, State> {

    public render() {        
        let options = this.props.projects
            .map(project => ({ key: project.id, text: project.name }))
            .sort((a, b) => a.text.localeCompare(b.text));
            
        return (
            <Dropdown
                label="Project" 
                placeHolder="Select a project" 
                options={options}
            />
        );
    }
}