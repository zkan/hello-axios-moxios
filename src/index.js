import axios from 'axios'

const printTitle = (text) => console.log(text)

//export const getPost = async (postId, fn) => {
  //const apiUrl = 'https://jsonplaceholder.typicode.com/posts/' + postId
  //const res = await axios.get(apiUrl)
  //fn(res.data.title)
//}

export const getPost = (postId, fn) => {
  const apiUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
  axios.get(apiUrl)
    .then((res) => fn(res.data.title))
}
