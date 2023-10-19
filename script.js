const btn = document.querySelector('button');
const block = document.querySelectorAll('.block');

btn.addEventListener('click', function() {
    block[1].append(`Here is my matriklinumer: 233229`);
})