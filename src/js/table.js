const TABLE = document.querySelector("table");

async function fillTable(users) {
    TABLE.innerHTML = "";

    addHeadRow();

    users.forEach((user) => {
        addRow(user.picture, user.name, user.location, user.email, user.phone, user.registeredDate);
    })
}

function addHeadRow() {
    let row = document.createElement("tr");
    TABLE.append(row);

    const headers = ["Picture", "Name", "Location", "Email", "Phone", "Registered date"];
    headers.forEach(e => {
        let cell = document.createElement("th");
        cell.innerText = e;
        row.append(cell);
    });
}

function addRow(picture, ...args) {

    let row = document.createElement("tr");
    TABLE.append(row);

    let cell = document.createElement("td");
    row.append(cell);

    let imgThumbnail = document.createElement("img");
    imgThumbnail.src = picture.thumbnail;
    imgThumbnail.classList.add("picture");
    cell.append(imgThumbnail);

    let imgLarge = document.createElement("img");
    imgLarge.src = picture.large;
    imgLarge.classList.add("tooltip");
    cell.append(imgLarge);

    args.forEach(e => {
        let cell = document.createElement("td");
        cell.innerText = e;
        row.append(cell);
    });
}

export { fillTable }