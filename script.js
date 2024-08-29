const forwardButtons = document.querySelectorAll('.forward-btn');

forwardButtons.forEach(button => {
    button.addEventListener('click', function() {
        const currentStep = document.querySelector('.active');
        const nextStep = 'step-' + this.getAttribute('data-next-step');

        currentStep.classList.remove('active');
        document.getElementById(nextStep).classList.add('active');
    })
})
