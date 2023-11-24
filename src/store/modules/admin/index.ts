const modules={
    namespaced:true,
    state:{
        username:localStorage['username']?localStorage['username']:"",
        isLogin:localStorage['isLogin']?Boolean(localStorage['isLogin']):false
    },
    mutations:{
        ["LOGIN"](state:any,payload:any){
            state.username=payload.username;
            state.isLogin=Boolean(payload.isLogin)
            localStorage['username']=payload.username;
            localStorage['isLogin']=payload.isLogin
        },
        ["OUT_LOGIN"](state:any){
            state.username="";
            state.isLogin=false;
            localStorage.removeItem("username");
            localStorage.removeItem("isLogin")
        }
    }
};

export default modules;
