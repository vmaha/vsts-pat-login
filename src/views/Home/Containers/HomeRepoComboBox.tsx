import { updateSelectedRepo } from "../../../redux/Actions/Repos";
import { State } from "../../../redux/States";

import { createListComboBoxContainer } from "./ListComboBoxContainer";

export const HomeRepoComboBox = createListComboBoxContainer(
    (state: State) => state.repos.childRepos,
    updateSelectedRepo,
    "Repos"
);