import { combineReducers } from 'redux'
import subscriptions from './subscriptions'
import categories from "./categories";

export default combineReducers({
    subscriptions, categories
})