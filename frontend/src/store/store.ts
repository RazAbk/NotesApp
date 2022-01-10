import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/user.reducer'


const rootReducer = combineReducers({
    userModule: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// Store types
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
