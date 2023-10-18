import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const getAllPosts = () => axios.get(URL).then(({ data }) => data)
