function main() {

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";

    var WordBlanks = "My " + myNoun + " " + myAdverb + " " + myVerb + " a " + myAdjective + " mile.";


    return WordBlanks;
}
console.log(main());
module.exports = main;