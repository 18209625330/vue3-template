const modules={
    namespaced:true,
    state:{
        //左侧栏目的数据源
        routesData:[]
    },
    mutations:{
        ["SET_ROUTES"](state:any,payload:any){
            state.routesData=payload.routesData;
        }
    },
    actions:{
        setRoutes(conText:any,payload:any){
            conText.commit("SET_ROUTES",{routesData:payload.routesData});
        }
    }
};

export default modules;
