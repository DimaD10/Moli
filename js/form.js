document.addEventListener('click', e => {
    if (e.target.classList.contains("reservation-body__button")) {
        e.preventDefault()
        let date = document.getElementById("myDate");

        console.log(date.value);
    }
})