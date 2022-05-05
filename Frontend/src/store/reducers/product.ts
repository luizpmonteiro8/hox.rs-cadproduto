import {
  SAVE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  IS_LOADING_PRODUCT,
  LOAD_PAGE_PRODUCT,
  RESET_PAGE_PRODUCT,
} from '../actions/actionTypes';
import { Product } from 'app/models/product';

const initialState = {
  product: [] as Product[],
  pagination: { length: 0, endIndex: 0 },
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGE_PRODUCT:
      return {
        ...state,
        product: action.payload.results,
        pagination: action.payload.pagination,
      };
    case SAVE_PRODUCT:
      return {
        ...state,
        product: state.product.concat(action.payload),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload.id) {
            item = action.payload;
          }
          return item;
        }),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        product: state.product.filter((item) => {
          if (item.id !== action.payload) {
            return item;
          }
        }),
      };
    case IS_LOADING_PRODUCT:
      return {
        ...state,
        isLoading: action.payload,
      };

    case RESET_PAGE_PRODUCT:
      return {
        ...initialState,
        pagination: null,
      };
    default:
      return state;
  }
};

export default reducer;
