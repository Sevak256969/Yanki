export function reducerFetch(state = [], action) {
  switch (action.type) {
    case "Fetch_Success":
      return {
        loading: false,
        data: action.payload,
        err: "",
      };
    case "Fetch_Error":
      return {
        loading: false,
        data: [],
        err: "sxallll",
      };
    default:
      return state;
  }
}
