import * as type from '../Actions/actionType';

const initialState = {
    userDetail: ''
};

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case type.SAVE_USER_DETAILS:
            return {
                ...state,
                userDetail: action.data
            }

        case type.SAVE_USER_TOKEN:
            return {
                ...state,
                userToken: action.data
            }
            
        case type.GET_PROJECT_DATA:
            return {
                ...state,
                projectData: action.data
            }

        default:
            return state;
    }
}