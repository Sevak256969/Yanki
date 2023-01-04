export function CatalogReducer(state, action) {
  switch (action.type) {
    case "FILTER":
      return action.payload.catalogImg.filter(
        (item) => item.size === action.payload.value
      );
    default:
      return state;
  }
}
