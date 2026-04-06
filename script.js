let passList = [];

let form = document.getElementById("passForm");
let list = document.getElementById("passList");
let count = document.getElementById("count");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let reason = document.getElementById("reason").value;
    let date = document.getElementById("date").value;

    passList.push({ name, reason, date });

    alert("Pass Applied!");

    display();
    form.reset();
});

function display() {
    list.innerHTML = "";

    passList.forEach((p, i) => {
        let li = document.createElement("li");
        li.innerText = p.name + " | " + p.reason + " | " + p.date;
        list.appendChild(li);
    });

    count.innerText = "Issued Passes (" + passList.length + ")";
}