import * as React from "react";
import { ComboBox } from "office-ui-fabric-react/lib/ComboBox";
import { ISelectableOption } from "office-ui-fabric-react/lib/utilities/selectableOption";

import { Project } from "../models/Project";

export interface Props {
    projects: Project[];
    onProjectSelected?: (projectId: string) => void;
}

export const ProjectComboBox = (props: Props) => {
    let getOptions = () => {        
        return (
            props.projects
            .map(project => ({ key: project.id, text: project.name }))
            .sort((a, b) => a.text.localeCompare(b.text))
        );
    }

    return (
        <ComboBox
            label="Project"
            options={getOptions()}
            onResolveOptions={() => getOptions()}
            onChanged={(option) => props.onProjectSelected(option.key as string)}
        />
    );
}