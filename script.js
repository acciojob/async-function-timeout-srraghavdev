//your JS code here. If required.
const textref= document.getElementById("text")
const numberref= document.getElementById("delay")
const button = document.getElementById("btn")
button.addEventListener("click",delayfunc)
async function delayfunc(){
	let textval = textref.value
	let delayval= numberref.value
	await new Promise(resolve=>{
		setTimeout(()=>{
			resolve()
		},delayval)
	})
	document.getElementById("output").innerText=textval
}