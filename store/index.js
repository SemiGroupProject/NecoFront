
export const state = () => ({
    token: ''
});

export const mutations = {
    setToken(state, token) {
        state.token = token;
    }
};

export const getters = {
    getToken(state) {
        return state.token;
    }
};

export const actions = {
    async nuxtServerInit({ commit }, { app, req, redirect, error, query }) {
    // intit
    }
};