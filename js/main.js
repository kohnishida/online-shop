'use strict'

{
    const btn = document.getElementById('burgericon');
    const mask = document.getElementById('mask');
    const menu = document.getElementById('hamburgermenu');

    btn.addEventListener('click', () => {
        mask.classList.remove('hidden');
        menu.classList.remove('hidden');
    });

    mask.addEventListener('click', () => {
        mask.classList.add('hidden');
        menu.classList.add('hidden');
    });

    menu.querySelectorAll('a').forEach(close =>{
        close.addEventListener('click', () => {
            mask.classList.add('hidden');
            menu.classList.add('hidden');
            });
    });
}