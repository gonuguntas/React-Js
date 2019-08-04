import mydata from '../../data/dynamicFormdata';


const form = "form"

export default function dynamicformReducer(state = {mydata}, action) {
  switch (action.type) {
      case form:
      return state;
    default:
      return state;
  }
}
