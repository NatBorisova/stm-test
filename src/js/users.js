class User {
    constructor(picture, name, location, email, phone, registeredDate) {
        this.picture = picture;
        this.name = name;
        this.location = location;
        this.email = email;
        this.phone = phone;
        this.registeredDate = registeredDate;
    }
}

async function getUsers() {

    let response = await fetch('https://randomuser.me/api/?results=15');
    let usersAPI = await response.json();

    let users = [];

    usersAPI.results.forEach(
        (e) => {
            let picture = { thumbnail: e.picture.thumbnail, large: e.picture.large };
            let name = `${e.name.first} ${e.name.last}`;
            let location = `${e.location.city}, ${e.location.state}`;
            let registeredDate = (new Date(e.registered.date)).toLocaleString().substring(0, 10);

            users.push(new User(picture, name, location, e.email, e.phone, registeredDate));
        }
    );

    return users;
}

export { getUsers}