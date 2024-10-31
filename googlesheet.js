const scriptURL = 'https://script.google.com/macros/s/AKfycbxVETFERCkQ6vJ1KC47rl12jxWrjkhqYQPRzAelLnReGGalRNeJegIzK5JYrKRiOT-GSw/exec'
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the form from reloading the page
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert('Thanks for your feedback!'))
        .then(() => {window.location.reload();})
        .catch(error => console.error('Error!',error))
        
});


