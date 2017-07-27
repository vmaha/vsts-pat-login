import { updateSelectedProject } from "../../../redux/Actions/Projects";
import { State } from "../../../redux/States";

import { createListComboBoxContainer } from "./ListComboBoxContainer";

export const HomeProjectComboBox = createListComboBoxContainer(
    (state: State) => state.projects,
    updateSelectedProject,
    "Project"
);