'use strict';

const user = {
    _firstName: 'Idasd',
    _lastName: 'Mdasd',
    createdAt: new Date,
    get fullName() {
        this.firstLast = this._firstName + ' ' + this._lastName
        return this.firstLast;
    },
    set fullName(value) {
            if (typeof value === 'string' && value.split(' ')[1] && value.split(' ')[0].length >=2 && this.firstLast.split(' ')[1].length >=2 ) {
                return this.firstLast;
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
        writable: false,
        enumerable: false,
        configurable: false
    },
    fullName: {
        enumerable: true,
        configurable: false
    }
})
user.fullName
user.fullName = user.firstLast
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
// При freeze усе блокується, тобто не можна вводити будь-які дані у об'єкт, а при sealed можна вводити будь-які дані у об'єкт, але не можна додавати чи видаляти їх
