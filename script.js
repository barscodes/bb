document.addEventListener('DOMContentLoaded', () => {
    const birthdayScreen = document.getElementById('birthday-screen');
    const messageScreen = document.getElementById('message-screen');
    const revealButton = document.getElementById('reveal-button');

    revealButton.addEventListener('click', () => {
        birthdayScreen.classList.add('hidden');
        messageScreen.classList.remove('hidden');

    });
});
