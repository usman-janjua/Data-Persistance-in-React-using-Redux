import * as actionTypes from './constants';

export const addProductSuccess = (data) => {
    return {
        type: actionTypes.ADD_PRODUCT_SUCCESS,
        payload: {data}
    };
};
