import "./style.css";
import { getUsers } from "./js/users";
import { fillTable } from "./js/table";

const FILTER = document.querySelector('.filter');
let users = [];

document.querySelector(".clear").addEventListener("click", () => {
    FILTER.value = "";
    fillTable(users);
})

FILTER.addEventListener('input', debounce(() => {
    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(FILTER.value.toLowerCase()));
    fillTable(filteredUsers);
}))

function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

async function showTable() {
    users = await getUsers();

    fillTable(users);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    document.querySelector('.loading').classList.add('hidden');
    document.querySelector('.table-container').classList.remove('hidden');
}

showTable();