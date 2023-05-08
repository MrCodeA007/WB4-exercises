const Myinfo = {
    name: "Alejandro",
    address: "123 Hobbit Hole",
    city: "The Shire",
    state: "Middle-Earth",
    zip: "00010"

};

printContract(Myinfo);

function printContract(Myinfo) {
    console.log(Myinfo.name);
    console.log(Myinfo.address);
    console.log(`${Myinfo.city}, ${Myinfo.state}, ${Myinfo.zip}` );
}