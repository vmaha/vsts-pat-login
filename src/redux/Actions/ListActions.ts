import { Action } from "redux";

export interface ListItem {
    id: string;
}

export interface ReceiveAction<T extends ListItem> extends Action {
    items: T[]
}

export interface UpdateSelectedAction extends Action {
    id: string;
}

export function getReceiveActionCreator<T extends ListItem>(actionType: string) {
    return (items: T[]) => ({
        type: actionType,
        items: items,
    });
}

export type UpdateSelectedActionCreator = (id: string) => UpdateSelectedAction;

export function getUpdateSelectedActionCreator(actionType: string): UpdateSelectedActionCreator {
    return (id: string) => ({
        type: actionType,
        id: id
    });
}