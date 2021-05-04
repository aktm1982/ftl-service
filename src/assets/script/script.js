window.onload = function() {

    const selects = document.querySelectorAll(".select");
    const items = document.querySelectorAll(".list__item_active");

    for(let i = 0; i < selects.length; i++) {
        selects[i].addEventListener('click', () => {
            const list = selects[i].querySelector('.list');
            const placeholder = selects[i].querySelector('.select__placeholder');
            list.classList.toggle('list_hidden');
            placeholder.classList.toggle('select__placeholder_active');
        })
    }

    for(let i = 0; i < selects.length; i++) {
        selects[i].addEventListener('mouseleave', () => {
            const list = selects[i].querySelector('.list');
            const placeholder = selects[i].querySelector('.select__placeholder');
            list.classList.add('list_hidden');
            placeholder.classList.remove('select__placeholder_active');
        })
    }

    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', (e) => {
            const ul = e.target.parentNode;
            const select = ul.parentNode;
            const holder = select.querySelector('.select__placeholder');
            holder.textContent = e.target.textContent;
            holder.classList.add('list__item_active');
        })
    }

    const checkbox = document.querySelector('.checkbox');
    const tempInput = document.querySelector('.temp-input');

    checkbox.addEventListener('click', () => {
        tempInput.classList.toggle("temp-input_hidden");
    })
}
