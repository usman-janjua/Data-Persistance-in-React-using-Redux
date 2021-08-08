import * as actionTypes from './constants';
import { updateObject } from '../../shared/utility';
import _ from 'lodash'

const initialState = {
    productList: []
}

const addProductSuccess = (state, action) => {
    const existingObject = _.cloneDeep(state.productList)
    existingObject.push(action.payload.data)
    return updateObject(state, {
       productList: existingObject
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_SUCCESS: return addProductSuccess(state, action)
        default:
            return state;
    }
}

export default reducer;