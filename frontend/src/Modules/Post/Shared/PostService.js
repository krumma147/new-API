import { Http } from "../../../Helper/Http";

const API_ENPOINT = {
    LIST_POST: '/post/post/list',
    GET_POST: '/post/post/get',
    CREATE_POST: '/post/post/create'
}
class PostService {
    constructor() {
        if(PostService._instance) {
            return PostService._instance;
        }
        PostService._instance = this;
    }

    listPost() {
        return Http.get(API_ENPOINT.LIST_POST);
    }
    getPost(id) {
        return Http.get(API_ENPOINT.GET_POST, {id})
    }
    createPost(data) {
        return Http.post(API_ENPOINT.CREATE_POST, data)
    }

}
const instance = new PostService();
export default instance;