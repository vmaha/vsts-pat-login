import * as React from "react";
import { ComboBox } from "office-ui-fabric-react/lib/ComboBox";
import { Spinner } from "office-ui-fabric-react/lib/Spinner";
import { ISelectableOption } from "office-ui-fabric-react/lib/utilities/selectableOption";

import { ListItem } from "../models/ListItem";

import "./ListComboBox.scss";

export interface Props<T extends ListItem> {
    items: T[];
    onItemSelected?: (id: string) => void;
    isFetching: boolean;
}

export function createComboBox<T extends ListItem>(label: string) {
    return (props: Props<T>) => {

        let getOptions = () => {        
            return (
                props.items
                .map(item => ({ key: item.id, text: item.name }))
                .sort((a, b) => a.text.localeCompare(b.text))
            );
        }

        let className = "list-combobox";
        if (props.isFetching) {
            className += " loading";
        }
        
        return (
            <div className={ className }>
                <ComboBox
                    label={ label }
                    options={getOptions()}
                    onResolveOptions={() => getOptions()}
                    onChanged={(option) => props.onItemSelected(option.key as string)}
                />
                <Spinner />
            </div>
        );
    }
}