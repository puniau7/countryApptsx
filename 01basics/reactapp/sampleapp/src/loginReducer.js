export const initialState = {
  data: {
    username: "",
    password: "",
  },
  loading: false,
  isValid: false,
  status: null,
  message: null,
  // token: 'BQAQq9gAh_Q7cd5PPXswpOTaojF8ihWc1ztvqe4HnKwB4O9wuw…7CXK_wig6czN_-6mf_KI4ImFFjz_GHyRE7csITUJbxGVu1mpX'
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case "error": {
      return {
        ...state,
        error: "incorrect usename or password",
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    default:
      return state;
  }
};
