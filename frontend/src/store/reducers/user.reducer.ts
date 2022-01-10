import { INote } from "../../interfaces/dataInterfaces"
import { IUser } from "../../interfaces/userInterfaces"

interface IState {
    loggedInUser: IUser | null,
    data: INote[] | null
}

interface IReducerAction {
    type: string,
    [key: string]: any
}

const initialState: IState = {
    loggedInUser: null,
    data: null
}

export const userReducer = (state = initialState, action: IReducerAction) => {
    switch (action.type) {
        case 'SET_USER':
            return state = { ...state, loggedInUser: action.user }
        case 'SET_DATA':
            return state = { ...state, data: action.data }
        default:
            return state
    }
}