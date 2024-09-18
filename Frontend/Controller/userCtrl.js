function login(){
    let user = {
        email: document.querySelector('#email').value,
        passwd: document.querySelector('#email').passwd
    }

    axios.post(`${serverUrl}/login`, users).then(res => {
        loggedUser = res.data;
        localStorage.setItem('pekseg', JSON.stringify(loggedUser));
        render('recipes')
    });
}

function registration(){
    let newUser = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        passwd: document.querySelector('#passwd').value,
        confirm: document.querySelector('#confirm').value
    }

    axios.post(`${serverUrl}/reg`, newUser).then(res => {
        alert(res.data);
    });
}

function logout(){
    localStorage.removeItem('pekseg');
    loggedUser = null;
    render('login');
}