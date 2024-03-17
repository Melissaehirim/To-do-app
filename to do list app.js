var form = document.getElementById("form")
var ope = document.querySelector(".ope")
var oll = document.getElementById("oll")
var inputt =document.querySelector(".input")
var btn = document.getElementById("btn")
var btn1 = document.getElementById("btn1")
var lola = document.querySelector(".lola")
var mom = document.querySelector(".mom")
 
function obi() {
  if (lola.value = "click") {
     ope.style.display = "block" 
     lola.style.display = "none"
  }
}

function ada() {

  var li = document.createElement("li")
  var deletebtn = document.createElement("button")
  var editbtn = document.createElement("button")
  var checkbox = document.createElement("input")
  var span = document.createElement ("span")
  var div1 = document.createElement ("div")
  var div2 = document.createElement ("div")
  div1.appendChild (checkbox)
  div1.className = "boy"
  checkbox.className = "girl"
  div1.appendChild (span)
  div2.appendChild (deletebtn)
  div2.appendChild (editbtn)
  span.innerHTML = inputt.value
  checkbox.type= "checkbox"
  deletebtn.className = "dde"
  editbtn.className = "dder"
  li.className ="lii"
  oll.appendChild(li)
  li.appendChild (div1)
  li.appendChild (div2)
  deletebtn.innerText = "del"
  editbtn.textContent = "edit"
deletebtn.addEventListener("click" ,function() {
oll.removeChild(li)  
})
editbtn.addEventListener("click" , function () {
  inputt.value = span.innerHTML 
  oll.removeChild(li) 
})
 
  
   inputt.value = " "
}

form.addEventListener("submit" , function (obi) {
  obi.preventDefault()
})
