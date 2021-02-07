import axios from "axios";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

// const server = 'http://127.0.0.1:3000/';

// IceCream-API 작성 (get,post,delete,put)
 export default{ 
    //  예시
    // getUserInfo(){
    //     const url = server + 'api/userinfo/';
    //      return axios.get(url) 
    // }, //글 작성하기
    //  createPost(data){ 
    //     const url = server + 'api/posts/';
    //      return axios.post(url, data) 
    // },deleteInfo(parameter){
    //     const url = server + '경로 입력';
    //     return axios.delete(url,parameter)
    // },updateInfo(parameter){
    //     const url = server + '경로 입력';
        
    //     const params = {
    //         example1: '예시',
    //         example2: 1
    //     }

    //     if (parameter){
    //         params.example3 = parameter;
    //     }

    //     return axios.put('url입력',params)
    // },
    // 이런 식으로 계속 작성 위의 method는 예시! 아래부터 시작
    createUser(user){
        const url = 'member/signup';
        
        return axios.post(url,user);
    },
    


}
