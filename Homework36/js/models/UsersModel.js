import endpoints from '../config/api.js ';
class Model{
    #key = null;
    #users = null;

    constructor(key) {
        this.#key = key;
    }

    validation(userInfo) {
        const failedFields = [];
        if (!userInfo.name){
            failedFields.push({key: "name",message:'name is required'});
        }
        if(userInfo.name && userInfo.name.trim().length === 0){
            failedFields.push({key: "name",message:'name is required'});
        }
        if(!userInfo.email){
            failedFields.push({key : "email",message:'email is required'});
        }
        if(userInfo.email && !userInfo.email.includes('@')){
            failedFields.push({key : "email",message:'email must include @'});
        }
        if(failedFields.length === 0) return true;
        return {
            isValid: failedFields.length === 0,
            errors: failedFields
        };

    }
    async getAllFetchUsers(){
        return fetch(endpoints.users)
            .then(res => {
                if(!res.ok) throw new Error(res.message);
                return res.json()
            })
            .then(data => {
                this.#users = this.create(data);
                return this.#users;
            })

            .catch(err => console.error(err))
            .finally(()=>{
                console.log('Запит завершено.');
        })

    }
    async getFetchUpdate(id, userData) {
        const dataToUpdate = await fetch(endpoints.usersId(id), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        if(!dataToUpdate.ok) {
            throw new Error(`Problems with server response body ${dataToUpdate.status}`)
        }
        return await dataToUpdate.json()
    }

    async getFetchUsers(id){
        const dataToUpdateGet = await fetch(endpoints.usersId(id))
        return await dataToUpdateGet.json()
    }

    async getAllFetchSubmit(userData){
        const dataToPost = await fetch(endpoints.usersPost, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        if(!dataToPost.ok) {
            throw new Error(`Problems with server response body ${dataToPost.status}`)
        }
        return await dataToPost.json();
    }

    async getFetchDelete(idDeleteButton){
        try{
            const dataToDelete = await fetch(endpoints.userIdDelete(idDeleteButton), {
                method: 'DELETE',
            })
            const parsedData = await dataToDelete.json()
            if(!dataToDelete.ok) throw new Error(`Delete error ${dataToDelete.status}`);

            return parsedData;
        }
        catch(err){
            throw new Error(err.message);
        }
    }

    create(userData){
        const dataStorage = userData.map(item => {
            return {
                id: item.id,
                name: item.name,
                ...item
            }
        })
        return dataStorage;
    }
    update(id, userData){
        this.#users = this.#users.map(user => user.id === id ? { ...user, ...userData } : user);
    }
    delete(id){
        this.#users = this.#users.filter(item => item.id !== id);
        console.log('delete', id);
    }
    get users(){
        return this.#users ? [...this.#users] : [];
    }
}
export default Model;