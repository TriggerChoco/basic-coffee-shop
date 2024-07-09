const loginButton = document.getElementById('login');
const avatarSpan = document.getElementById('avatar');
const shoppingCart = document.getElementById('shopping-cart')
const hotDrinkItems = document.getElementById('hot-drink-pic')
const cappuchino = document.getElementById('cappuchino')
const espresso = document.getElementById('espresso')
const macchiato = document.getElementById('macchiato')
const mocha = document.getElementById('mocha')
const cart = {
    items: [],
    totalPrice: 0,
};

loginButton.addEventListener("click", function loginPrompt() {
    const fullName = prompt("What is your full name?");
    if (fullName !== null && fullName !== "") {
        const initials = getInitials(fullName);
        loginButton.parentNode.innerHTML = '<span id="avatar">' + initials + '</span>';
    }
});

function getInitials(fullName) {
    const name = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i]); {
            initials += name[i][0];
        }
    }
    return initials;
}

function addToCart(name, price) {
    
}