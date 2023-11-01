let btn  =  document.getElementById("btn");
let ipt  =  document.getElementById("inp");
let list =  document.getElementById("list");


btn.addEventListener("click", function() {
    if(!ipt.value){
    document.getElementById("res").textContent= "Please enter anything"
    return;
}else{
    document.getElementById("res").textContent= "" 
}
  let txt = ipt.value;
  let li = document.createElement("li");
   li.textContent = txt;
   list.appendChild(li);
   ipt.value = "";
});