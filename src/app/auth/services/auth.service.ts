export class AuthService {
    readonly SERVER_API= "https://lab.invertebrado.co/api";
   
  login = async (user:string, password:string) => {
    console.log(user)
    try {
      const res = await fetch(`${this.SERVER_API}/account/login`, {
        method:"POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bear jwttoken',
        },
        body: JSON.stringify({userName:user, Password:password})
      });
      if (res.ok) {
        return res.json();
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };
  
}
