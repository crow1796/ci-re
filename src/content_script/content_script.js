require('./bootstrap')

let possibleUsernamesFields = [
    "log",
    "login",
    "login_email",
    "_username",
    "user",
    "user_login",
    "xxxuserxxx",
    "auth_userId",
    "user[email]",
    "mailusuario",
    "usernameOrEmail",
    "email",
    "username"
]

let inputFields = document.querySelectorAll('input')

_.map(inputFields, (field) => {
    if (_.includes(possibleUsernamesFields, field.id) || _.includes(possibleUsernamesFields, field.name) || field.type == 'password' && !field.disabled) {
        return setAsFetchableField(field)
    }
})

function setAsFetchableField(field){
    field.style.backgroundImage = `url(${chrome.runtime.getURL('images/fieldlogo.png')})`
    field.style.backgroundRepeat = 'no-repeat'
    field.style.backgroundAttachment = 'scroll'
    field.style.backgroundSize = '19px 19px'
    field.style.backgroundPosition = '98% 50%'
    field.style.cursor = 'pointer'
    field.style.paddingRight = '26px'
}