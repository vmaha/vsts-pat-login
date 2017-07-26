import { State } from "../States";

export function createInit(getState: () => State) {
    return {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa("" + ":" + getState().personalAccessToken),
            'Content-Type': 'application/json'
        }
    };
}