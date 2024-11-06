const TOKEN = '7427479878:AAHRFmdEO5AqhOqM-rYknRhjhrx_o9goxt0'
const chat_id = '-4546379989'


const form = document.querySelector('.Form');
const nameInp = document.querySelector('.name-inp');
const lnameInp = document.querySelector('.Lastname-inp');
const phoneInp = document.querySelector('.phone-inp');
const emailInp = document.querySelector('.email-inp');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Получить значения из инпутов
    let nameValue = nameInp.value;
    let lnameValue = lnameInp.value;
    let phoneValue = phoneInp.value;
    let emailValue = emailInp.value;

    sendData(nameValue, lnameValue, phoneValue, emailValue); // Передаем правильные значения
});

async function sendData(name, lname, phone, email) {
    const info = `Name: ${name} %0A Last Name: ${lname} %0A Phone: ${phone} %0A Email: ${email}`;
    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chat_id}&text=${info}&parse_mode=html`);
    const data = await response.json();
    console.log(data);
}
