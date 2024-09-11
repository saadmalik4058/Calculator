let string = " ";
let buttons = document.querySelectorAll('.but');
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.display').value = string;
        }
        else if (e.target.innerHTML == 'RESET') {
            string = "";
            document.querySelector('.display').value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
        string =   string.slice(0,-1);
        document.querySelector('.display').value = string;
           
        }
        else{
            string += e.target.innerHTML;
            document.querySelector('.display').value = string;
            console.log(e.target);
        }
    })
})

var icon = document.getElementById("change")
icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        icon.src = "./moon.png";
    }
    else{
        icon.src = "./sun.png";

    }
    console.log('anas');
  };