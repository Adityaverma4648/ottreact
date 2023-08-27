import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjNkOGRjNTY1MjhiMDY1NmFkMzk0ZGQ5YjkwMzkwYyIsInN1YiI6IjY0ZGUxOTFlYTNiNWU2MDEzOTAwYjg3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vr0aSH-zUFeMU8m_N2zLfamsgARUTYJeZUX24Kn9Rag";
    
const headers = {
  "Authorization": "bearer "+ TMDB,
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
    