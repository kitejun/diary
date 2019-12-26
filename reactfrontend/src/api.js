import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"


// object 넣는 곳
export default{
    // 모든 글 불러오기
    getAllPosts(){
        return axios.get('/posts/')
    },

    // 하나의 글 불러오기
    getPost(id){
        return axios.get('/posts/' + String(id))
    },

    // 글 작성하기
    createPost(data){
        return axios.post('/posts/', data)
    },
    
    deletePost(id) {
        return axios.delete('/posts/' + String(id))
    },

    updatePost(id) {
        return axios.patch('/posts/' + String(id))
    },
    
     // 모든 댓글 불러오기
     getAllContents(){
        return axios.get('/contents/')
    },

    // 하나의 댓글 불러오기
    getContent(id){
        return axios.get('/contents/' + String(id))
    },

    // 댓글 작성하기
    createContent(data){
        return axios.post('/Contents/', data)
    },
    
    deletePost(id) {
        return axios.delete('/posts/' + String(id))
    },

    updatePost(id) {
        return axios.patch('/posts/' + String(id))
    },
}