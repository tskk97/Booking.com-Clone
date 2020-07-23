import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_PASSWORD_FAILURE,
  REGISTER_PASSWORD_SUCCESS,
  REGISTER_PASSWORD_REQUEST,
} from "./actionType";

const initState = {
  isRegister: false,
  registerData: "",
  message: "",
  userEmail: "",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        // isRegister:true,
      };

    case REGISTER_USER_SUCCESS:
      console.log(action.payload.status);
      return {
        ...state,
        registerData: action.payload,
        isRegister: action.payload.status,
        message: action.payload.msg,
        userEmail: action.payload.msg,
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        message: action.payload.msg,
        isRegister: action.payload.status,
      };

    case REGISTER_PASSWORD_REQUEST:
      console.log(action.payload);
      return {
        ...state,
      };

    case REGISTER_PASSWORD_SUCCESS:
      return {
        ...state,
        isRegister: action.payload.status,
        message: action.payload.msg,
      };
    case REGISTER_PASSWORD_FAILURE:
      return {
        ...state,
        message: action.payload.msg,
        isRegister: action.payload.status,
      };
    default:
      return { ...state };
  }
};  

export default reducer;
