let inp = document.querySelector(".todo__text")
let list = document.querySelector(".list1")
let add = document.querySelector(".add")
let i = 0;
add.onclick = function(){
    let p = document.createElement("p")
    i++
    p.innerHTML = i + ". " + inp.value
list.append(p)
}
