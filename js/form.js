const form = document.getElementById('res-form')
/*
document.addEventListener('click', e => {
    if (e.target.classList.contains("reservation-body__button")) {
        e.preventDefault()
        let date = document.getElementById("myDate");
        document.querySelector('.reservation-body__hidden-input').value = e.target.textContent;
        let dateValue = date.value;

        if (dateValue != '') {
            date.classList.remove('error');

            emailjs.sendForm('service_4uxhk58', 'template_w3nl0bw', form, "6vRcXwMzTAdMWmEqY")
                .then(function() {
                    console.log('SUCCESS!');
                    form.classList.add('hidden')
                    document.querySelector('.success-message').classList.add('active')
                }, function(error) {
                    console.log('FAILED...', error);
                    form.classList.add('hidden')
                    document.querySelector('.error-message').classList.add('active')
                });
        } else {
            date.classList.add('error');
            alert('Select Your Date Please')
        }
    }
})*/