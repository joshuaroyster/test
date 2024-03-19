let image = document.querySelector(".image");
let name = document.querySelector(".name");
let team = document.querySelector(".team");
let sport = document.querySelector(".sport");
let result = document.querySelector(".result");
let button = document.querySelector(".button");


let bobblehead1 = {
    image: "https://i.ebayimg.com/images/g/Li8AAOSwNLxkcApU/s-l1200.webp",
    name:"Lebron James",
    team:"Lakers",
    sport:"Basketball",
};
let bobblehead2 = {
    image: "https://www.foco.com/cdn/shop/products/BHNHLGCYEOWG_p_700x875_crop_center.jpg?v=1642226895",
    name: "Wayne Gretzky",
    team : "Edmonton Oilers",
    sport: "Hockey",
};

let bobblehead3 = {
    image: "https://i.ebayimg.com/images/g/y9kAAOSwKmxkFjwx/s-l400.jpg",
    name: "Justin Jefferson",
    team: "Minnesota Vikings",
    sport: "Football",
};

let inputs = [bobblehead1, bobblehead2, bobblehead3];
console.log(inputs);
    
button.onclick = function() {
    let imageValue = image.value;
    let sportValue = sport.value;
    let teamValue = team.value;
    let nameValue = name.value;

let userBobblehead = {
    image: imageValue,
    name: nameValue,
    sport: sportValue,
    team: teamValue,
};

result.innerHTML = "";
    
inputs.push(userBobblehead);
    
inputs.forEach(function(userBobbleheads) {
    result.insertAdjacentHTML('beforeend', `<img src= "${userBobbleheads.image}"></img> <li> Team: ${userBobbleheads.team}</li> <li>Sport: ${userBobbleheads.sport}</li> <li> Name: ${userBobbleheads.name}</li>`);
    });
};