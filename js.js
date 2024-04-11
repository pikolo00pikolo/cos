// Pobranie referencji do guzików oraz kontenera .wrapper
const signinBtn = document.querySelector('#in');
const signupBtn = document.querySelector('#up');
const wrappers = document.querySelectorAll('.wrapper');
const wrp1 = document.querySelector('.wrp1')
const wrp2 = document.querySelector('.wrp2')

// Dodanie nasłuchiwacza zdarzeń dla guzika "Sign Up"
signupBtn.addEventListener('click', function() {
    // Iteracja przez wszystkie wybrane wrappery
    wrappers.forEach(wrapper => {
        // Dodanie klasy "active" do aktualnego kontenera .wrapper
        wrapper.classList.add('active');
    });
});

signupBtn.addEventListener('click', function (){
    wrp2.classList.add('active')
});

signinBtn.addEventListener('click', function (){
    wrp2.classList.remove('active')
});


// Dodanie nasłuchiwacza zdarzeń dla guzika "Sign In"
signinBtn.addEventListener('click', function() {
    // Iteracja przez wszystkie wybrane wrappery
    wrappers.forEach(wrapper => {
        // Usunięcie klasy "active" z aktualnego kontenera .wrapper
        wrapper.classList.remove('active');
    });
});
