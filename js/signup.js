
  const signupForm = document.querySelector('#signupForm');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#user-signup').value;
    const email = document.querySelector('#email-signup').value;
    const pass = document.querySelector('#password-signup').value;
  
    const Users = JSON.parse(localStorage.getItem('users')) || []; 
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered){
      return alert('Usuario ya Registrado');
    }
  
    Users.push({name: name, email: email, password: pass});
    localStorage.setItem('users', JSON.stringify(Users));
    alert('Registro Exitoso');
  
      document.querySelector(".btnLogin").classList.remove("hidden");
      document.querySelector(".btnCuenta").classList.add("hidden");
  
  });
  