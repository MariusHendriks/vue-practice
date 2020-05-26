export default {
  addPet: ({ commit }: any, payload: Species) => {
    commit("appendPet", payload);
  },
};
