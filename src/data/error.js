const undefinedAdmin = {
    code: '101',
    message: 'Wrong admin email'
}
const wrongPassword = {
    code: '102',
    message: 'Wrong password'
}
const notAllowed = {
    code: '103',
    message: 'Not allowed'
}
const errorInServer = {
    code: '500',
    message: 'Error in the server'
}

const errors = { undefinedAdmin , wrongPassword , errorInServer }
export default errors 