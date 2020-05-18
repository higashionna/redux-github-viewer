import { combineReducers } from 'redux'

import issue from './issueReducer'

const rootReducer = combineReducers({
    issue
})

export default rootReducer