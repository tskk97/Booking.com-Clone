import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_PASSWORD_FAILURE,
  REGISTER_PASSWORD_SUCCESS,
  REGISTER_PASSWORD_REQUEST,
} from "./actionType";

const initState = {
  isAuth: false,
  isRegister: false,
  registerData: "",
  message: "",
  userData: "",
  userEmail: "",
  userToken: "",
  userName: ""
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
      };

    case REGISTER_USER_SUCCESS:
      if(action.payload.mode === "Google"){
        let temp = (action.payload.user_data[0].email).split("@")
        let uname = temp[0]
        return {
          ...state,
          registerData: action.payload,
          isRegister: action.payload.status,
          message: action.payload.msg,
          isAuth: !state.isAuth,
          userEmail: action.payload.user_data[0].email,
          userToken: action.payload.token,
          userData: action.payload.user_data,
          userName: uname
        };
      }
      else if(action.payload.mode === "Manual"){
        return {
          ...state,
          message: action.payload.msg,
          userEmail: action.payload.msg,
          isRegister: action.payload.status,
        }
      }

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        message: action.payload.msg,
        isRegister: action.payload.status
      };

    case REGISTER_PASSWORD_REQUEST:
      console.log(action.payload);
      return {
        ...state,
      };

    case REGISTER_PASSWORD_SUCCESS:
      let temp = (action.payload.user_data[0].email).split("@")
      let uname = temp[0]
      return {
        ...state,
        registerData: action.payload,
        isRegister: action.payload.status,
        message: action.payload.msg,
        isAuth: !state.isAuth,
        userEmail: action.payload.user_data[0].email,
        userToken: action.payload.token,
        userData: action.payload.user_data,
        userName: uname
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
