//returns an array of names
function getfamily() {
    let family = ["Alejandro", "Gloria", "Emanuel", "Xynaja"]
return family;
}

//displays data in an array of names
function displayFamily(family) {
    let numFamily = family.length;
    for (let i = 0; i < numFamily; i++) {
        console.log(family[i]);
    }
}

let ourfamily = getfamily(); //returns an array
displayFamily(ourfamily); //pass an array