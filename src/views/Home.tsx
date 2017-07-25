import * as React from "react";
import { RouteComponentProps } from "react-router";
import { connect, Dispatch } from "react-redux";

import { Auth } from "../models/Auth";
import { Project } from "../models/Project";

import { Config } from "../components/Config";
import { ProjectDropdown } from "../components/ProjectDropdown";

import { store } from "../redux/Store";
import { State as ReduxState} from "../redux/States";
import { fetchProjects } from "../redux/Actions";

import "./Home.scss";

export interface Props extends RouteComponentProps<any> {
    projects: Project[];
}

export class State {
}

class HomeInternal extends React.Component<Props, State> {

    public componentDidMount() {
        store.dispatch(fetchProjects());
    }

    public render() {
        let auth = new Auth();
        auth.loginIfNeeded();
        return (
            <main className="view-home">
                <div className="config-container left">
                    <div>
                        <ProjectDropdown 
                            projects={this.props.projects}
                        />
                    </div>
                </div>
                <div className="config-container right">                    
                    <Config/>
                </div>
            </main>
        );
    }
}

function indexProjectsToArray(projects: { [projectId: string]: Project }): Project[] {
    let array: Project[] = [];
    for (let projectId in projects) {
        array.push(projects[projectId]);
    }
    return array;
}

const mapStateToProps = (state: ReduxState) => {
  return {
    projects: indexProjectsToArray(state.projects.projects),
  }
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {
  }
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeInternal);