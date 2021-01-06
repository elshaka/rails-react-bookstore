const loadingReducer = (loading = false, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return action.loading;
    default:
      return loading;
  }
};

export default loadingReducer;
