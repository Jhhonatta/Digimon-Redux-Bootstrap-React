import {
  ADD_SEARCHED_DIGIMONS,
  ALL_DIGIMONS,
  RESET_DIGIMONS,
} from "./actionTypes";

export const addDigimons = (digimon) => ({
  type: ADD_SEARCHED_DIGIMONS,
  digimon,
});

export const addALLDigimons = (digimon) => ({
  type: ALL_DIGIMONS,
  digimon,
});

export const resetDigimons = () => ({
  type: RESET_DIGIMONS,
});
