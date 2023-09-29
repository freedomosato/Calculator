 let resultEl = document.getElementById("result")

function calculate(number){
  resultEl.innerHTML += number
}
function equal(){
  try{
      resultEl.innerHTML = eval(resultEl.innerHTML)
  }
  catch(err){
    alert("invalid input")
    
  }
}

function clr(){
  resultEl.innerHTML = ""
}

function del(){
  resultEl.innerHTML = resultEl.innerHTML.slice(0, -1)
}

function percent(){
  resultEl.innerHTML = eval(resultEl.innerHTML/100)
}