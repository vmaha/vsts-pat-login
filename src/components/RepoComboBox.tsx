import * as React from "react";
import { ComboBox } from "office-ui-fabric-react/lib/ComboBox";
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import { ISelectableOption } from "office-ui-fabric-react/lib/utilities/selectableOption";

import { Repo } from "../models/Repo";

import "./RepoComboBox.scss";

export interface Props {
    items: Repo[];
    onItemSelected?: (repoId: string) => void;
    isFetching: boolean;
}

export const RepoComboBox = (props: Props) => {
    let getOptions = () => {        
        return (
            props.items
            .map(item => ({ key: item.id, text: item.name }))
            .sort((a, b) => a.text.localeCompare(b.text))
        );
    }

    let className = "repo-combobox";
    if (props.isFetching) {
        className += " loading";
    }
    return (
        <div className={ className }>
            <ComboBox
                label="Repository"
                options={getOptions()}
                onResolveOptions={() => getOptions()}
                onChanged={(option) => props.onItemSelected(option.key as string)}
            />
            <Spinner />
        </div>
    );
}