// Menu Bar --------------------

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const menuLinks = document.getElementsByClassName('menu-links')[0]

toggleButton.addEventListener('click', () => {
    menuLinks.classList.toggle('active')
})

// Comment Box --------------------

const output = document.getElementById('comments') 


const nickname = document.getElementById('nickname')
nickname.addEventListener('keypress', function(event) {
    if (event.key == 'Enter'){
        event.preventDefault()
        comment.focus()
    }
})


const comment = document.getElementById('comment')
comment.addEventListener('keypress', function(event) {
    
    if (event.key == 'Enter'){
        event.preventDefault()
        sendMessage()
    }
})


// Funktio viestin lähettämistä varten
function sendMessage() {
    if (nickname.value == '' ||
    comment.value == ''
    ) {
        console.log('tyhjä arvo')
        return
    }
    let content = `${nickname.value}: ${comment.value}`
    const p = document.createElement('p');
    p.className = 'message'
    p.textContent = content
    output.appendChild(p)
    output.scrollTo(0, output.scrollHeight);
    comment.value = ''
    comment.focus()
}

const sendButton = document.getElementById('send-btn') 
sendButton.addEventListener('click', () => {    
    sendMessage()
})

const cancelButton = document.getElementById('cancel-btn') 
cancelButton.addEventListener('click', () => {    
    comment.value = ''
    comment.focus()
})