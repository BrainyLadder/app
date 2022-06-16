import { combineReducers, legacy_createStore } from "redux";
import { reducers } from "../Reducers/reducers";

const rootReducer = combineReducers(
    { ladder: reducers }
);

const configureStore = () => {
    return legacy_createStore(rootReducer)
}
export default configureStore;
