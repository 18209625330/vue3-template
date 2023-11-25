interface AdminState {
    username: string | null;
    isLogin: boolean;
}
interface LoginPayload {
    username: string;
    isLogin: boolean;
}

const modules={
    namespaced:true,
    state:{
        username: localStorage.getItem('username') ?? null,
        isLogin: localStorage.getItem('isLogin') ? Boolean(localStorage.getItem('isLogin')) : false
    },
    mutations:{
        ["LOGIN"](state:AdminState,payload:LoginPayload){
            state.username=payload.username;
            state.isLogin=Boolean(payload.isLogin)
            localStorage['username']=payload.username;
            localStorage['isLogin']=payload.isLogin
        },
        ["OUT_LOGIN"](state:AdminState){
            state.username=null;
            state.isLogin=false;
            localStorage.removeItem("username");
            localStorage.removeItem("isLogin")
        }
    }
};

export default modules;
