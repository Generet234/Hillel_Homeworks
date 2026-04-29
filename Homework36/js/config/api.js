export default {
    baseUrl:'https://jsonplaceholder.typicode.com',
    usersId(id) {
        return this.baseUrl + '/users/' + id;
    },
    get usersPost(){
        return this.baseUrl + '/users';
    },
    get users(){
        return this.baseUrl + '/users';
    },
    userIdDelete(id) {
        return this.baseUrl + '/users/' + id;
    }
}