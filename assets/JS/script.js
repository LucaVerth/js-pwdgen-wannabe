// Password generator

/*
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 
*/

const firstName = prompt('whats your name?');
const lastName = prompt('whats your last name?');
const favColor = prompt('whats your favorite color?');

const password = firstName + lastName + favColor;
var txt = password;
var len = txt.length;

document.getElementById('textBox').innerHTML = password + len;

