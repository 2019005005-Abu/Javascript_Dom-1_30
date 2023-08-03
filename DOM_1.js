// There are 3 doms
/**
 * 1.core dom
 * 2.xml dom
 * 3.Js DOM
 */

// Selecting Element Document Object Model
/**
 * There are 6 selecting elements
 * 1.getElementById()
 * 2.getElementsByClassName()
 * 3.getElementsByName()
 * 4.getElementsByTagName()
 * 5.querySelector()
 * 6.queryselectorAll()
 */

 //1.getElementById()
let letgetElementByID=document.getElementById('h1_id');
console.log(letgetElementByID)
letgetElementByID.innerText="Rifat";
letgetElementByID.style.textAlign="center"
letgetElementByID.style.color="green"

// 2.getElementsByClassName()
let letgetElemenyByClass=document.getElementsByClassName('h1Class')[0]
letgetElemenyByClass.style.border="2px solid red"
letgetElemenyByClass.innerHTML="Bangladesh";
letgetElemenyByClass.style.width="150px";
letgetElemenyByClass.style.padding='3px 6px';
letgetElemenyByClass.style.margin='0 auto'


//3.getElementsByName()
let getElementBYYName=document.getElementsByName('h2')[0];
getElementBYYName.style.backgroundColor="green";

//4.getElementsByTagName()

let getElementBYYTagName=document.getElementsByTagName('h2')[0]
getElementBYYTagName.style.border='none'

//querySelector()
let getElementQuerySelector=document.querySelector('#h1_id')
getElementQuerySelector.innerText="I am a programmer"
//querySelectorAll()
let getElementByQuerySelectorAll=document.querySelectorAll('.rt')[0];
getElementByQuerySelectorAll.innerText="Bangladesh";
getElementByQuerySelectorAll.style.backgroundColor="red";
getElementByQuerySelectorAll.style.width="300px";
getElementByQuerySelectorAll.style.textAlign="center"


