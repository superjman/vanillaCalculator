const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
let temp;

calculate = () => {
  let equation = eval(result.innerHTML);
  result.innerHTML = equation;
}

displayResult = name => {
  name === "=" ? calculate() : null
  name === "C" ? result.innerHTML = "" : null
  if(name != "C" && result.innerHTML === ""){
    result.innerHTML = name;
  }else if(name != "C" && name != "=") {
    result.innerHTML = result.innerHTML + name;
  }
}

for(let i=0;i<buttons.length;i++){
 buttons[i].addEventListener("click", function(){ displayResult(this.name); }); 
}
