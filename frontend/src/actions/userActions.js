import axios from "axios";

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_REQUEST" });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    // Placeholder API call
    const { data } = await axios.post(
      "/api/users/register",
      { name, email, password },
      config
    );

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: error.response?.data?.message || error.message,
    });
  }
};
