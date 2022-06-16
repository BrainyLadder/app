import * as types from './actionType';

export const saveUserDetails = data => {
    return {
        type: types.SAVE_USER_DETAILS,
        data: data
    }
}

export const saveUserToken = data => {
    return {
        type: types.SAVE_USER_TOKEN,
        data: data
    }
}

export const getProjectData = data => {
    return {
        type: types.GET_PROJECT_DATA,
        data: data
    }
}