import {state } from './state'

export const setters = {
    setToken(token: string): void{
        state.config.Token= token;
    },
    setIsLogin(isLogin: boolean): void{
        state.config.isLogin= isLogin;
    },
}