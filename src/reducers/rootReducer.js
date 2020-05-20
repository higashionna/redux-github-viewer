import { combineReducers } from 'redux'

import issue from './issue'
import modal from './ui/modal'

const rootReducer = combineReducers({
    issue,
    ui: combineReducers({ modal })
})

export default rootReducer