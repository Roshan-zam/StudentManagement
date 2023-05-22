import {
  AUTH_USER,
  IS_LEARNING,
  IS_SUBMITTED,
  IS_ENROLLED,
  IS_EVALUATED,
  INSTRUCTOR,
} from "../Action/actions";

const initialState = {
  auth: false,
  isEnroll: false,
  isLearner: false,
  isSubmitted: false,
  isEvaluated: false,
  instructor: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, auth: action.payload };
    case IS_ENROLLED:
      return { ...state, isEnroll: action.payload };
    case IS_LEARNING:
      return { ...state, isLearner: action.payload };
    case IS_SUBMITTED:
      return { ...state, isSubmitted: action.payload };
    case IS_EVALUATED:
      return { ...state, isSubmitted: action.payload };
    case INSTRUCTOR:
      return { ...state, instructor: action.payload };
    default:
      return state;
  }
};
