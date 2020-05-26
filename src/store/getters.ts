export default {
  animalsCount: (state: any) => {
    return state.cats.length + state.dogs.length;
  },
};
