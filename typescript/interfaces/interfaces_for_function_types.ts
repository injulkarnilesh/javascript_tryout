
interface CharmingLook {
    (hairColor : string, eyeColor : string) : void  //mind : not =>
}

interface DisneyCharacter {
    name : string;
    age : number;
    lookCharming : CharmingLook;
}

let ariel : DisneyCharacter = {
    name : 'Ariel',
    age : 16,
    lookCharming : function(hairColor : string, eyeColor : string) {
        console.log(this.name + ' looks charming with ' + hairColor + ' hair and ' + eyeColor + ' eyes.')
    }
    //lookCharming : (hairColor : string, eyeColor : string) =>
    //    console.log(this.name + ' looks charming with ' + hairColor + ' hair and ' + eyeColor + ' eyes.')
    //this.name is undefined
};
ariel.lookCharming('Red', 'Blue');



