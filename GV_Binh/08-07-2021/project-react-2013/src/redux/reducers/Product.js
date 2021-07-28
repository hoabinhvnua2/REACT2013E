import produce from "immer";
import { productAction } from "../constants/Product";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

const product = (state = initialState, actions) =>
  produce(state, (draft) => {
    const { type, payload } = actions;
    switch (type) {
      case productAction.GET_PRODUCT:
        draft.loading = true;
        break;
    case productAction.GET_PRODUCT_SUCCESS:
        draft.loading = false
        draft.data = payload
        break;
    case productAction.GET_PRODUCT_FAILTE:
        draft.loading = false
        draft.error = payload
        break;
      default:
        break;
    }
  });

  export default product
