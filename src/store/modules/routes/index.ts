interface Meta {
    id: string;
    auth?: boolean;
    keepAlive?: boolean;
    isActive?: boolean;
    isLnkActive?: boolean;
    isLink?: boolean;
}
interface RouteData {
    name: string;
    path?: string;
    component?: string;
    meta: Meta;
    children?: Array<RouteData>;
}
interface RootState {
    routesData: Array<RouteData>;
}
interface SetRoutesPayload {
    routesData: Array<RouteData>; // 使用更具体的类型
}
const modules={
    namespaced:true,
    state:{
        //左侧栏目的数据源
        routesData:[] as Array<RouteData>,
    },
    mutations:{
        ["SET_ROUTES"](state:RootState,payload:SetRoutesPayload){
            state.routesData=payload.routesData;
        }
    },
    actions:{
        setRoutes(conText:any,payload:SetRoutesPayload){
            conText.commit("SET_ROUTES",{routesData:payload.routesData});
        }
    }
};

export default modules;
