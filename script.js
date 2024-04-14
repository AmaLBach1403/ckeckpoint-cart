<<<<<<< HEAD
//hedhi bich naawdou ahna nafs khedma mtaa main.js wahadna
const plusBtn = document.querySelectorAll(".plus-btn");
const minusBtn = document.querySelectorAll(".minus-btn");
const total = document.querySelector("#total-price");
//# hedhika khater juste ana menha wahda bark
total.style.color="red";
plusBtn[0].style.color="pink";
plusBtn.forEach(function(v,i){
    console.log(v,i);
    v.style.backgroundColor="red";
});
//foreach heya tekhedh kol element men tableau w taatoh argument 
//argument looul valeur w theni indice(v,i)

=======
const plusBtn = document.querySelectorAll(".plus-btn");
const minusBtn = document.querySelectorAll(".minus-btn");
const total = document.querySelector("#total-price");
total.style.color = "red";
plusBtn[0].style.color = "pink";
plusBtn.forEach(function (v, i) {
  v.style.backgroundColor = "red";
});
>>>>>>> 9635044f1ed100adaea1124a4fe5e9fc25409fb5
