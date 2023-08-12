const messagesDiv = document.getElementById('messages');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit');
let replyTarget = null;

let storedMessages;
if(JSON.parse(localStorage.getItem('messages')) === null)
    storedMessages = [];
else
    storedMessages = JSON.parse(localStorage.getItem('messages'));
messagesDiv.innerHTML = storedMessages.join('');

function updateLocalStorage() {
    const messageElements = messagesDiv.querySelectorAll('.message');
    const messages = [...messageElements].map(element => element.outerHTML);
    localStorage.setItem('messages', JSON.stringify(messages));
}

submitButton.addEventListener('click', () => {
    const name = nameInput.value;
    const message = messageInput.value;
    // console.log(`${name}: ${message}`);

    if(name === ''){
        alert("Please enter your name!");
        // return;
    }
    if(message === ''){
        alert("Please enter your message!");
        // return;
    }

    if (name && message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerHTML = `<div class="name">Name: ${name}</div><div class="content">Message: ${message}</div>
                                <button class="reply">Reply</button><button class="delete">Delete</button>`;
        messagesDiv.appendChild(messageDiv);

        nameInput.value = '';
        messageInput.value = '';

        updateLocalStorage();
        replyTarget = null;
    }
});

messagesDiv.addEventListener('click', (event) => {

    console.log(event);

    if (event.target.classList.contains('reply')) {
        const messageDiv = event.target.closest('.message');
        // console.log(messageDiv);
        
        // if (replyTarget) {
        //     replyTarget.querySelector('.reply-box').remove();
        // }

        if(replyTarget)
            replyTarget.querySelector('.reply-box').remove();
        
        replyTarget = messageDiv;
        const replyName = messageDiv.querySelector('.name').textContent;
        
        const replyBox = document.createElement('div');
        replyBox.className = 'reply-box';
        replyBox.innerHTML = `<input type="text" id="replyName" placeholder="Your Name">
                              <input type="text" id="replyMessage" placeholder="Your Reply">
                              <button class="submit-reply">Submit</button>`;
        messageDiv.appendChild(replyBox);
        
        const replyNameInput = replyBox.querySelector('#replyName');
        const replyMessageInput = replyBox.querySelector('#replyMessage');
        const submitReplyButton = replyBox.querySelector('.submit-reply');
        
        replyNameInput.focus();

        submitReplyButton.addEventListener('click', () => {
            const replyName = replyNameInput.value;
            const replyMessage = replyMessageInput.value;

            console.log(`${replyName}: ${replyMessage}`);
            if(replyMessage ===  '')
                alert("Please enter the reply!")

            if (replyMessage) {
                const replyDiv = document.createElement('div');
                replyDiv.className = 'reply-message';
                if(replyName === '')
                    replyDiv.innerHTML = `<strong>Anonymous:</strong> ${replyMessage}`;
                else
                replyDiv.innerHTML = `<strong>${replyName}:</strong> ${replyMessage}`;
                messageDiv.insertBefore(replyDiv, replyBox);
                
                nameInput.value = '';
                replyNameInput.value = '';
                replyMessageInput.value = '';
                
                updateLocalStorage();
                replyTarget = null;
                replyBox.remove(); 
            }
            // replyBox.remove(); 
        });
    }

    if (event.target.classList.contains('delete')) {
        const messageDiv = event.target.closest('.message');
        messageDiv.remove();
        updateLocalStorage();
    }
});