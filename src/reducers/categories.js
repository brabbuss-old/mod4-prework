export const category = (state = 'all', action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      const category = action.category
      return category;
    default:
      return state;
  }
}