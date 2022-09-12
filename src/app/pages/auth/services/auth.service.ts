import { SERVER_API } from '../../../shared/config/config';

export class AuthService {
   
  login = async (user:string, password:string) => {
    try {
      const res = await fetch(`${SERVER_API}/account/login`, {
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `bear jwttoken`,
        },
        body: JSON.stringify({UserName:user, Password:password})
      });
      if (res.status===200) {
        return res.json();
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };
  
  loggedIn():boolean {
    return !!localStorage.getItem("Token"); 
  };
  getToken(){
    return localStorage.getItem("Token");
  }
  signOut(){
    localStorage.removeItem("Token");
  }
}
