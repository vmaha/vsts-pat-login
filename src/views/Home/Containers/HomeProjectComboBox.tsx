import { connect, Dispatch } from "react-redux";

import { ProjectComboBox } from "../../../components/ProjectComboBox";
import { Project } from "../../../models/Project";
import { updateSelectedProject } from "../../../redux/Actions";
import { State } from "../../../redux/States";

function indexProjectsToArray(projects: { [projectId: string]: Project }): Project[] {
    let array: Project[] = [];
    for (let projectId in projects) {
        array.push(projects[projectId]);
    }
    return array;
}

const mapStateToProps = (state: State) => {
    return {
        projects: indexProjectsToArray(state.projects.projects),
    }
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
    return {
        onProjectSelected: (projectId: string) => {
          dispatch(updateSelectedProject(projectId));
        }
    };
};

export const HomeProjectComboBox = connect(mapStateToProps, mapDispatchToProps)(ProjectComboBox);