const form = document.getElementById('form');
const successElement = document.querySelector('.success');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    successElement.innerHTML = `<i class="fa-solid fa-check"></i> Thank you!`;
})
