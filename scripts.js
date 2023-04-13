// Menu Bar --------------------

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuLinks = document.getElementsByClassName('menu-links')[0]

toggleButton.addEventListener('click', () => {
    menuLinks.classList.toggle('active')
})

// Comment Box --------------------

const nickname = document.getElementById('nickname')
const sendButton = document.getElementById('send-btn') 
const cancelButton = document.getElementById('cancel-btn') 
const comment = document.getElementById('comment');
const output = document.getElementById('comment-view') 


nickname.addEventListener('input', () => {
    let nick = document.createTextNode(nickname.value)
    console.log(nickname.innerText)
})
comment.addEventListener('input', () => {
    let content = document.createTextNode(comment.value)
    console.log(comment.value)
})

function sendMessage(content) {

    const p = document.createElement('p');
        p.className = 'message'
        // p.id = 
        p.textContent = content
        output.appendChild(p)
}

sendButton.addEventListener('click', () => {    
    let s = `${nickname.value}: ${comment.value}`
    sendMessage(s)
})