const API_URL = "http://localhost:8000/api"

export const registerUser = async (data) => {

  const response = await fetch(`${API_URL}/auth/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return response.json()
}


export const loginUser = async (data) => {

  const response = await fetch(`${API_URL}/auth/login/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return response.json()
}


  export const getCurrentUser = async () => {
    const response = await fetch(`${API_URL}/auth/me/`, {
      method: "GET",
      credentials: "include", // این خط حیاتی است!
      headers: {  
        "Content-Type": "application/json",
      },
    });
    return response.json();
  };