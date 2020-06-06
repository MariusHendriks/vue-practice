import state from "./state";

export default {
  appendPet: (state: any, { species, pet }: Species) => {
    state[species].push(pet);
  },
  login: (state: any, { username, password }: any) => {
    state.username = username;
  },
};
