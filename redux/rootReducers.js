import { combineReducers } from 'redux';

import loginReducer from './login/loginReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    login:loginReducer,
    user:userReducer
})

export default rootReducer