const registerBtn = document.getElementById("register-btn-add-user");

function handleRegisterForm(event) {
    event.preventDefault();

    const firstNameInput = document.querySelector(`input[name='reg-fname']`).value;
    const lastNameInput = document.querySelector(`input[name='reg-lname']`).value;
    const emailInput = document.querySelector(`input[name='reg-email']`).value;
    const passwordInput = document.querySelector(`input[name='reg-psw']`).value;
    const stateInput = document.querySelector(`input[name='reg-state']`).value;
    const sportInput = document.querySelector(`input[name='reg-sport']`).value;
    const roleInput = document.querySelector(`input[name='reg-role']`).value;
    // console.log(`Email: |${stateInput}|`);
    fetch('/api/users', {
        method: "post",
        body: JSON.stringify({
            first_name: firstNameInput,
            last_name: lastNameInput,
            email: emailInput,
            password: passwordInput,
            state: stateInput,
            sport: sportInput,
            role: roleInput
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then((res) => {
            // console.log(res);
            // res.json(res);
            document.location.replace('/html/success.html')
        })
        .catch((err) => {
            console.log(err);
            // res.json(err);
        })
}

registerBtn.addEventListener('click', handleRegisterForm);