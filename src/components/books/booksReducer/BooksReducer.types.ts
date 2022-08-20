import results from "../Books.types";
import actions from "./actions";
export type stateType =  {
  loading: boolean;
  error: string;
  data: results | null;
}
type loading ={
  type:actions.LOADING
  payload?:never
}
type success = {
  type:actions.SUCCESS ,
  payload:results
}
type error = {
  type:actions.ERROR
  payload:string
} 
export type actionType = error | loading | success;


