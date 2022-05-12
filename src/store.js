import { combineReducers, createStore } from "redux";
import { reducer as FormsReducer} from "./Redux/forms/reducer";

const rootReducer = combineReducers({
    
    formsState: FormsReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__() );
console.log(store.getState());