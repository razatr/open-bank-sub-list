import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducer'
import api from "../middlewares/api";

const store = createStore(reducer, applyMiddleware(api))

//dev only
window.store = store

export default store