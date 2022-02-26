
// create user reducer fucntion 
// action will have type and payload property e.g., { type = 'LOGGED_IN_USER', payload: {name: 'Ryan', role:'Seller'} }
export const authReducer = (state = {}, action) => {
    switch(action.type) {
      case "LOGGED_IN_USER":
        return {...state, ...action.payload};
        case 'LOGOUT':
          return action.payload;
          default:
            return state;
    }
  }