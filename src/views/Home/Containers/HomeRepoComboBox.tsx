import { connect, Dispatch } from "react-redux";

import { RepoComboBox } from "../../../components/RepoComboBox";
import { updateSelectedRepo } from "../../../redux/Actions/Repos";
import { State } from "../../../redux/States";
import * as Reselectors from "../../../redux/Reselectors";

const mapStateToProps = (state: State) => {
    return {
        items: Reselectors.indexToArray(state.repos.childRepos.items),
        isFetching: state.repos.childRepos.isFetching,
    }
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
    return {
        onItemSelected: (repoId: string) => {
          dispatch(updateSelectedRepo(repoId));
        }
    };
};

export const HomeRepoComboBox = connect(mapStateToProps, mapDispatchToProps)(RepoComboBox);