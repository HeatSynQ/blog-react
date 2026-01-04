const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://my-json-server.typicode.com/HeatSynQ/blog-react'
  : 'http://localhost:5000';

export default API_URL;