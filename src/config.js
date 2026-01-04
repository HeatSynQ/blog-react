const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://my-json-server.typicode.com/HeatSynQ/todo-react'
  : 'http://localhost:5000';

export  {API_URL};