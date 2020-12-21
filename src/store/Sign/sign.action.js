export const SIGN = "SIGN"
export const SIGN_LOADING = "SIGN_LOADING"

export const signIn = (props) => {
  return (dispatch) => {
    dispatch({ type: SIGN })
    dispatch({ type: SIGN_LOADING })
  };
};


//component que chama o action que chama o reducer...
//...reducer muda o estado e volta par ao componente