import axios from "axios"

axios.defaults.baseURL = "http://127.0.0.1:8000/api"


// object 넣는 곳
export default{
    // 모든 글 불러오기
    getAllPosts(){
        return axios.get('/posts/')
    },
    // 글 작성하기
    createPost(data){
        return axios.post('/posts/', data)
    },
    
    deletePost(id) {
        return axios.delete('/posts/' + String(id))
    },

    // 모든 댓글 불러오기
    getAllComments(){
        return axios.get('/comments/')
    },
    // 댓글 작성하기
    createComment(data){
        return axios.post('/comments/', data)
    },
    
    deleteComment(id) {
        return axios.delete('/comments/' + String(id))
    },

    
}

