  export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  });


  export const fetchDataFailure = (error) => ({
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  });

export const fetchData = () => {
  return async (dispatch) => {
      try {
        const response = await fetch('https://64dda642825d19d9bfb153e0.mockapi.io/weather');
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
};
