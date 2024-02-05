import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import {navbarReducer} from './NavbarReducer/navbarReducer'
import thunk from 'redux-thunk';
import { eventReducer } from './EventReducer/eventReducer';
import { productDetailsReducer } from './ProductDetailsPageData/productDetailsReducer';
import { videoReducer } from './VideosReducer/videoReducer';
import { userReducer } from './User/userReducer';
const reducer=combineReducers({
navbarHome:navbarReducer,productDetailsReducer,eventReducer,videoReducer,userReducer
});
export const store=legacy_createStore(reducer,applyMiddleware(thunk));