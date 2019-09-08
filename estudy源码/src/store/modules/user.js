import {api} from '../../utils/api'

const state = {
    loggedIn: false,
    info: {}
}
const mutations = {
    login(state, data) {
        state.loggedIn = true;
        state.info = data;
        api.defaults.headers.common["Token"] = state.info.token;
    },
    updateToken(state, token) {
        state.info.token = token;
    },
    logout(state) {
        state.info = {};
        state.loggedIn = false;
        api.defaults.headers.common["Token"] = "";
    }
}
const actions = {
    login({commit}, form) {
        api.post("/auth/login", form).then(result => {
            commit("login", result);
        })
    },
    checkedLogin({commit, state, dispatch}) { // 刷新页面执行验证token是否过期
        api.defaults.headers.common["Token"] = state.info.token
        api.post("/auth/refreshToken",{},{_slient:true}).then(token => {
            commit("updateToken", token)
        }).catch(() => {
            dispatch("logout")
        })
    },
    logout({commit}) {
        commit("logout");
    }
}
export default {
    namespaced: true, // 命名空间
    state,
    mutations,
    actions
}