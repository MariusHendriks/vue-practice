export default {
  animalsCount: (state: any) => {
    return state.cats.length + state.dogs.length;
  },

  isLoggedIn: (state: any) => {
    if (state.username !== undefined && state.username !== "") {
      return true;
    } else {
      return false;
    }
  },
};
