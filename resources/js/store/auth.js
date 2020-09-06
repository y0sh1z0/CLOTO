import { getEndpoint as $endpoint } from '../api';

const state = {
  user: null,
};

const getters = {
  check: state => !!state.user,
  user: state => (state.user ? state.user : ''),
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  async register(context, data) {
    const response = await axios.post($endpoint('POST:register'), data);
    context.commit('setUser', response.data);
  },
  async login(context, data) {
    const response = await axios.post($endpoint('POST:login'), data);
    context.commit('setUser', response.data);
  },
  async logout(context) {
    const response = await axios.post($endpoint('POST:logout'));
    context.commit('setUser', null);
  },
  async authUser(context) {
    // ログインユーザーの取得
    const response = await axios.get($endpoint('GET:authUser'));
    const user = response.data || null;
    context.commit('setUser', user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
