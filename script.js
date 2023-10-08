 let resultEl = document.getElementById("result")

function calculate(num){
    resultEl.innerHTML += num
}
 function cal(character){
     if(character === 'Del'){
         resultEl.innerHTML = resultEl.innerHTML.slice(0, -1)
         
     }else if(character === 'Cls'){   
         resultEl.innerHTML = null
         resultEl.ariaPlaceholder = '0.' 
         
     }else if(character === '%'){
         resultEl.innerHTML = resultEl.innerHTML/100
       
     }else if(character === '='){
         try{
        resultEl.innerHTML = eval(resultEl.innerHTML)
        }
        catch(err){
        resultEl.innerHTML = "invalid input"
        }
     }
 }