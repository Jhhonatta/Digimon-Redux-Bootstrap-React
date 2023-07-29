import { ADD_SEARCHED_DIGIMONS, RESET_DIGIMONS } from "./actionTypes";
import { ALL_DIGIMONS } from "./actionTypes";

const initialState = [];

const digimonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DIGIMONS: {
      const { digimon } = action;
      return [...digimon];
    }
    case ADD_SEARCHED_DIGIMONS: {
      const { digimon } = action;
      return [digimon];
    }
    case RESET_DIGIMONS: {
      return [];
    }
    default:
      return state;
  }
};

export default digimonsReducer;
