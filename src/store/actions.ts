export default {
  addPet: ({ commit }: any, payload: Species) => {
    commit("appendPet", payload);
  },
  login: ({ commit }: any, payload: any) => {
    commit("login", payload);
  },
};
