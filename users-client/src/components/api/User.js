import axios from "axios";
import Api,{SERVER_API, headers} from "./config";
const User ={
    async deleteUser(ids) {
        return axios.post(
                SERVER_API+"/user/delete", {
                headers: headers,
                data:{id: ids}
              });
    },
    async registerUser(form) {
        return axios.post(
            SERVER_API+"/user/register-user", {
            headers: headers,
            data:form
          });
    },
    async getUsersList() {
        return Api.get("/user/get");
    },
    async getUserDetails(id) {
        return Api.get("/user/get/"+id);
    },
    async updateUserDetails(data) {
        return axios.put(
            SERVER_API+"/user/update", {
            headers: headers,
            data:data
          });
    },
}

export default User;