const input=document.getElementById("input");
const btn=document.getElementById("addBtn");
const list=document.getElementById("list");
btn.addEventListener("click", function()
{
    const val=input.value.trim();
    if(val==="")
    {
        alert("Task cannot be empty");
        return;
    }
    const li=document.createElement("li");
    li.textContent= val;
    const del=document.createElement("span");
    del.textContent= "❌";
    del.classList.add("delete");
    del.addEventListener("click", function()
    {
        li.remove();
    });
    li.appendChild(del)
    list.appendChild(li);
    input.value="";
})