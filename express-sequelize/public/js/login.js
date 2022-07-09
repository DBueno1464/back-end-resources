const loginBtn = document.getElementById('user-login-btn');

function handleLoginForm(event) {
    event.preventDefault();

    const emailInput = document.querySelector("input[name='log-email']").value;
    const passwordInput = document.querySelector("input[name='log-psw']").value;


    fetch('/api/users/login', {
        method: "post",
        body: JSON.stringify({
            email: emailInput,
            password: passwordInput
        }),
        headers: { "Content-Type": "application/json" }
    })
        .then((res) => {
            // console.log(res);
            // res.json("You did it!")
            document.location.replace('/html/success.html')
        })
        .catch((err) => {
            console.log(err);
        })
}

loginBtn.addEventListener('click', handleLoginForm);