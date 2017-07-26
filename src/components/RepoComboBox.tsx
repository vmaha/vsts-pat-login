import * as React from "react";
import { ComboBox } from "office-ui-fabric-react/lib/ComboBox";
import { ISelectableOption } from "office-ui-fabric-react/lib/utilities/selectableOption";

import { Repo } from "../models/Repo";

export interface Props {
    items: Repo[];
    onItemSelected?: (repoId: string) => void;
}

export const RepoComboBox = (props: Props) => {
    let getOptions = () => {        
        return (
            props.items
            .map(item => ({ key: item.id, text: item.name }))
            .sort((a, b) => a.text.localeCompare(b.text))
        );
    }

    return (
        <ComboBox
            label="Repository"
            options={getOptions()}
            onResolveOptions={() => getOptions()}
            onChanged={(option) => props.onItemSelected(option.key as string)}
        />
    );
}