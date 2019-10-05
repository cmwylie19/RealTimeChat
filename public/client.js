"use strict";

import Chat from './Chat';

export function validNick(nickname) {
    var regex = /^\w*$/;
    return regex.exec(nickname) !== null;
}

class Client {
    constructor () {
        let btn = document.getElementById('startButton'),
            userNameInput = document.getElementById('userNameInput');
        
        btn.onclick = () => {
            this.startChat(userNameInput.value);
        };

        userNameInput.addEventListener('keypress', (e) => {
            let key = e.which || e.keyCode;

            if (key === 13) {
                this.startChat(userNameInput.value);
            }
        });
    }

    startChat(nick) {
        let nickErrorText = document.querySelector('#startMenu .input-error');

        if (validNick(nick)) {
            nickErrorText.style.opacity = 0;
            this.nick = nick;
        } else {
            nickErrorText.style.opacity = 1;
            return false;
        }

        this.chat = new Chat(this.nick);

        document.getElementById('startMenu').style.display = 'none';
        document.getElementById('chatbox').style.display = 'block';
    }
}

window.onload = () => {
    new Client();
};