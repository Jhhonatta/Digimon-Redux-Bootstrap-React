import api from "../../../services/api";
import { addDigimons, addALLDigimons } from "./actions";

export const fetchAllDigimonsThunk = () => async (dispatch) => {
  try {
    const response = await api.get(`/api/digimon`);
    const allDigimons = response.data;
    dispatch(addALLDigimons(allDigimons));
  } catch (error) {
    console.log(error.response.data.ErrorMsg);
  }
};

export const fetchSingleDigimonThunk =
  (digimon, setError) => async (dispatch) => {
    try {
      const response = await api.get(`/api/digimon/name/${digimon}`).then();
      dispatch(addDigimons(...response.data));
    } catch (error) {
      console.log(error.response.data.ErrorMsg);
      setError(error.response.data.ErrorMsg);
    }
  };
