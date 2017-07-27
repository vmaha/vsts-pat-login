import { connect, Dispatch } from "react-redux";

import { createComboBox } from "../../../components/ListComboBox";
import { State, ListState } from "../../../redux/States";
import * as Reselectors from "../../../redux/Reselectors";

import { ListItem } from "../../../models/ListItem";
import { UpdateSelectedActionCreator } from "../../../redux/Actions/ListActions";

export function createListComboBoxContainer<T extends ListItem>(
    getListState: (state: State) => ListState<T>,
    updateSelectedActionCreator: UpdateSelectedActionCreator,
    label: string,
) {
    const mapStateToProps = (state: State) => {
        let listState = getListState(state);
        return {
            items: Reselectors.indexToArray(listState.items),
            isFetching: listState.isFetching,
        }
    };

    const mapDispatchToProps = (dispatch: Dispatch<State>) => {
        return {
            onItemSelected: (id: string) => {
            dispatch(updateSelectedActionCreator(id));
            }
        };
    };

    const listComboBox = createComboBox<T>(label);
    return connect(mapStateToProps, mapDispatchToProps)(listComboBox);
}