import wilders from "./wildersData.js";

function wildersCards({
    name,
    picture,
    job,
})  {
    return `
    <div class="profile-card">
        <div class="card">
            <img class="imageronde" src="${picture}" alt="Photo profil "${name}">
            <p class="cardName">${name}</p>
            <p class="personJob">${job}</p>
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