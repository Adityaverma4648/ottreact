import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
 
const headers = {
  "Authorization": "bearer "+ "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjM2OTdkYmJhNGYyYjBjODNlY2IzNTUyZGVhYjhlYiIsInN1YiI6IjY0ZGUxOTFlYTNiNWU2MDEzOTAwYjg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4dXeKgFZj04VUDSDC1W0MQnQn3y8ZpajQ9vUpbAItk",
}

    
  export const fetchApi = async (uri  ) =>{ 
  try {
     const {data} =  await axios.get(BASE_URL + uri , {headers }  );
     return data;
  } catch (error) {
      console.error(error);
      return error;
  }
}
    