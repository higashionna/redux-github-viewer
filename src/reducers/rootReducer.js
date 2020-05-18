import { combineReducers } from 'redux'

import issueReducer from './issue/reducer'

const rootReducer = combineReducers({
    issue: issueReducer
})

export default rootReducer