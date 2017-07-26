import { connect, Dispatch } from "react-redux";

import { ProjectComboBox } from "../../../components/ProjectComboBox";
import { updateSelectedProject } from "../../../redux/Actions/Projects";
import { State } from "../../../redux/States";
import * as Reselectors from "../../../redux/Reselectors";

const mapStateToProps = (state: State) => {
    return {
        items: Reselectors.indexToArray(state.projects.items),
        isFetching: state.projects.isFetching,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
    return {
        onItemSelected: (projectId: string) => {
          dispatch(updateSelectedProject(projectId));
        }
    };
};

export const HomeProjectComboBox = connect(mapStateToProps, mapDispatchToProps)(ProjectComboBox);