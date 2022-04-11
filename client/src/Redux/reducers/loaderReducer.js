import { DISABLE_LOADER, ENABLE_LOADER } from "../type/type";


// eslint-disable-next-line default-param-last
const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case ENABLE_LOADER:
      return true;

    case DISABLE_LOADER:
      return false;

    default:
      return state;
  }
};

export default loaderReducer;
