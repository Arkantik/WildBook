import wilders from "./wildersData.js";

function wildersCards({
    name,
    picture,
    job,
})  {
    return `
    <div class="profile-card">
        <img class="imageronde" src="${picture}"
            alt="Photo profil "${name}">
        <div class="cardName">
            <h2>${name}</h2>
        </div>
        <div class="personJob">
            <h3>${job}</h3>
        </div>
        <button class="viewmorebutton">View more</button>
    </div>`;
}

function render(users) {
    let html = "";
    for (let i = 0; i < users.length; i++) {
        html += wildersCards(users[i]);
    }
    return html;
}

export default render;