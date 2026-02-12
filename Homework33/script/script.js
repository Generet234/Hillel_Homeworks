'use strict';

const user = {
    _firstName: '',
    _lastName: '',
    firstLast: '',
    createdAt: new Date,
    get fullName() {
        return this.firstLast;
    },
    set fullName(value) {
        this.firstLast = value;
            if (typeof this.firstLast === 'string' && this.firstLast.split(' ')[1] && this.firstLast.split(' ')[0].length >=2 && this.firstLast.split(' ')[1].length >=2 ) {
                this._firstName = this.firstLast.split(' ')[0];
                this._lastName = this.firstLast.split(' ')[1];
            }
            else {
                throw new Error('Conditions are not completed');
            }
    },
    lockProfile(){
        Object.seal(user);
    },
    lockHard(){
        Object.freeze(user);
    }
}
Object.defineProperties(user, {
    _firstName: {
        writable: true,
        enumerable: false,
        configurable: false
    },
    _lastName: {
        writable: true,
        enumerable: false,
        configurable: false
    },
    createdAt: {
        writable: false
    },
    fullName: {
        enumerable: true,
        configurable: false
    }
})
user.fullName
user.fullName = 'Ivan Dfds'
console.log(user.fullName)
console.log(Object.getOwnPropertyDescriptors(user));
user.lockProfile();
console.log(Object.isSealed(user))
//user.lockHard();
console.log(user.createdAt = 'dsdada')
console.log(Object.defineProperty(user, 'nana',{
    value:'haha'
}));
delete user.fullName;
// При freeze усе блокується, тобто не можна вводити будь-які дані у об'єкт,writable false,configurable false, а при sealed властивість writable true,configurable false, але не можна додавати чи видаляти їх
