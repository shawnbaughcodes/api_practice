$(document).ready(function() {
    let moves = []
    let abilities = []
    // $.get("http://pokeapi.co/api/v1/pokemon/1/", function(res) {
    //     console.log(res);
    //     // MOVES
    //     for (let i in res.moves) {
    //         moves.push(res.moves[i].name);
    //         $(".moves").append(i+ ". " + moves[i] + ", ")
    //     };
    //     // ABILITIES
    //     for (let i in res.abilities) {
    //         // console.log(res.abilities[i].name);
    //         abilities.push(res.abilities[i].name)
    //         $(".abilities").append(i+ ". " + res.abilities[i].name + ", ")
    //     }
    //     $(".speed").append(res.speed)
    //     $(".attack").append(res.attack)
    // }, "json")
    // $.get("", function(res) {
    //     "user-key: ",
    //
    // })
    $.ajax({
        query: "Restaurants",
        key: 'AIzaSyBCilcMeJ7O77FTSwvomDgl3V7UtO8uA0U',
    })
});
