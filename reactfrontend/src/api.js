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

    updatePost(id, data) {
        return axios.put('/posts/' + String(id), data)
    }, 
}