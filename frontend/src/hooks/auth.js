import { useNavigate } from "react-router-dom";

export function useRegister() {
    
    const register = async(user) => {
        try {
            const response = await fetch(
              "http://localhost:8000/api/v1/users/register",
              {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                  email: user.email,
                  name: user.username,
                  password: user.password,
                  
                }),
              }
            );
            const responseData = await response.json();
            if (response.ok) {
              console.log(responseData);
            }
          } catch (error) {
            console.log(error);
          }
    }

    return {register}
    
    
  };




  export function useLogin() {
    const navigate = useNavigate();

    const userLogin = async (user) => {
        try {
          const response = await fetch("http://localhost:8000/api/v1/users/login", {
            headers: {
              "Content-Type": "application/JSON",
            },
            method: "POST",
            body: JSON.stringify({
              email: user.email,
              password: user.password,
            }),
          });
          const responseData = await response.json();
          if (response.ok) {
            localStorage.setItem('token', responseData.token);
            navigate('/home')
            console.log(responseData);
          }
    
        } catch (error) {
            console.log(error)
        }
      };

      return {userLogin}
  }