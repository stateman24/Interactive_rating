let rating;

function getRating(number) {
    let ratingNumber = document.querySelectorAll('.ratingnumber');
    
    ratingNumber.forEach((ratingnumber) => {
        ratingnumber.classList.remove('rating-active')
    })

    ratingNumber[number -1].classList.add('rating-active');
    ratingNumber[number - 1].classList.remove('ratinghover')
    document.getElementById('ratingValue').textContent = number
    rating = number
}

function submit() {
    if (rating) {
        document.querySelector('.rating-card').classList.add('hidden')
        document.querySelector('.thank-you-card').classList.remove('hidden')
    }
    else{
        document.getElementById('alert').textContent = 'Input a Value'
    }
}