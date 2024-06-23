let formData = {
    email: "",
    message: ""
};

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    
    const loadFromLocalStorage = () => {
        const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
        if (savedState) {
            formData = savedState;
            emailInput.value = formData.email || '';
            messageInput.value = formData.message || '';
        }
    };

    
    const saveToLocalStorage = () => {
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    };

    
    form.addEventListener('input', (event) => {
        if (event.target.name === 'email' || event.target.name === 'message') {
            formData[event.target.name] = event.target.value.trim();
            saveToLocalStorage();
        }
    });

    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        
        if (formData.email && formData.message) {
            console.log(formData);

            localStorage.removeItem('feedback-form-state');
            formData = { email: "", message: "" };
            form.reset();
        } else {
            alert('Fill please all fields');
        }
    });

    loadFromLocalStorage();
});
