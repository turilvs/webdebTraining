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
const comment = document.getElementById('comment')
const output = document.getElementById('comments') 


nickname.addEventListener('input', () => {
    let nick = document.createTextNode(nickname.value)
    console.log(nickname.innerText)
})
comment.addEventListener('keyup', function(event) {
    
    if (event.key === "Enter") {
        event.preventDefault()
        sendMessage(comment.value)
    }
})

function sendMessage() {

    let content = `${nickname.value}: ${comment.value}`
    const p = document.createElement('p');
        p.className = 'message'
        // p.id = 
        p.textContent = content
        output.appendChild(p)
        comment.value = ''
}

sendButton.addEventListener('click', () => {    
    sendMessage()
})