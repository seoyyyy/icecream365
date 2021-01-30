import axios from "axios";
 
// IceCream-API 작성 (get,post,delete,put)
 export default{ 
     
    getUserInfo(){
         return axios.get('api/userinfo/') 
    }, //글 작성하기
     createPost(data){ 
         return axios.post('api/posts/',data) 
    },deleteInfo(parameter){
        return axios.delete('url입력',parameter)
    },updateInfo(parameter){
        return axios.put('ulr입력',parameter)
    },
    // 이런 식으로 계속 작성 위의 method는 예시!
}
