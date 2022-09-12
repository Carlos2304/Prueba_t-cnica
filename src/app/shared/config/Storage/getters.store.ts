import { state } from "./state";

export const getters = {
    getToken(){
        return state.config.Token;
    },
    getIsLogin(){
        return state.config.isLogin;
    },
    getDataLocal(){
        const Count = state.data.length
        return {Count: Count, Data:state.data}
    }
}