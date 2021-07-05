class User{
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    changeUsername(updateName) {
        this.username = updateName
    }
}

module.exports = User