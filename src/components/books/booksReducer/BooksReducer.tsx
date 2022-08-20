import { actionType, stateType } from "./BooksReducer.types";
import actions from "./actions";

export const initialState:stateType = {
  loading: false,
  error: "",
  data: null,
};

const booksReducer = (state:stateType , action:actionType):stateType => {
  switch (action.type) {
    case actions.LOADING:
      return {loading: true ,error:"",data: null };
    case actions.SUCCESS:
      return {loading: false,error:"",data: action.payload };
    case actions.ERROR:
      return {loading: false, error:action.payload,data:null };
    default:
      return state;
  }
};
export default booksReducer;
