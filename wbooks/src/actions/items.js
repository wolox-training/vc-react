export const itemsHasErrored = (bool) => {
  return {
      type: 'LOGIN_HAS_ERRORED',
      hasErrored: bool
  };
}

export const itemsIsLoading = (bool) => {
  return {
      type: 'LOGIN_IS_LOADING',
      isLoading: bool
  };
}

export const itemsFetchDataSuccess = (access_token, renew_id) => {
  return {
      type: 'LOGIN_SUCCESS',
      access_token,
      renew_id
  };
}

export const itemsFetchData = (url) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        dispatch(itemsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
