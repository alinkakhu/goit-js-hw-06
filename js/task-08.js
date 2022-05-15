const form = document.querySelector('.login-form');

function submit(e) {
    e.preventDefault();
    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    
    if (email === "" || password === "") {
    return alert("Please fill all fields");
    }
    const formValues = {
        email,
        password
    }
    console.log(formValues);
    e.currentTarget.reset()
}
form.addEventListener('submit', submit)