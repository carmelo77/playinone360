import router from '../../router/'

export default {
    state: {
        user: null,
        isLogged: false,
    },
    mutations: {
        LOGIN(state, data) {

            const { email, password, name } = JSON.parse(localStorage.getItem('users_registered'));

            if(email === data.email && password === data.password) {
                localStorage.setItem('user', JSON.stringify({
                    email,
                    password,
                    name,
                }));

                localStorage.setItem('logged', true);

            } else {
                alert('Error');
            }
        },
        SET_USER(state, user) {
            state.user = user;
            state.isLogged = true;
        },

        LOGOUT(state) {
            state.isLogged = false;
            localStorage.removeItem('logged');
            localStorage.removeItem('user');

            state.user = null;
            state.isLogged = false;
        }
    },
    getters:{
        user: state => state.user,
        isLogged: state => state.isLogged
    },
    actions: {
        register({commmit}, data) {

            const { name, email, password } = data;
            const registro = { name, email, password }

            localStorage.setItem('users_registered', JSON.stringify(registro));
        },

        login({ commit }, data) {
            commit('LOGIN', data);
        },

        autologin({commit}) {
            let logged = localStorage.getItem("logged");
            if(logged) {;
                commit("SET_USER", JSON.parse(localStorage.getItem("user")));
            }
  
            //router.push({name: "Home"});
        },

        logout({ commit }) {
            commit('LOGOUT');
        }
    }
}