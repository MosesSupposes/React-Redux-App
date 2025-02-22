import { combineReducers } from 'redux'

import { homePageReducer } from "./HomePageReducer";
import { searchPageReducer } from "./SearchPageReducer";

const rootReducer = combineReducers({
    homePage: homePageReducer,
    searchPage: searchPageReducer
})

export default rootReducer