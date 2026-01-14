

const userinput = document.getElementById('username');
const passinput = document.getElementById('password');
const btn = document.getElementById('btn');
const message = document.getElementById('message');

let user1 = {
    username: "Goldwin",
    password: "goldwin1234",
    login: function(userinput, passinput){
        if(userinput === this.username && passinput === this.password){
            message.textContent = "Login successful";
            message.style.color = "green";
            window.location.href = "https://www.amazon.in";
        } else {
            message.textContent = "Login failed";
            message.style.color = "red";
        }
    }
}
btn.addEventListener('click', function(){
    user1.login(userinput.value, passinput.value);
});