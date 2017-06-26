export enum House {
    LANISTER,
    STARK,
    TARGARYN,
    GREYJOY,
    TULLY,
    BARATHEON
}

export function GetHouseWords(house : House) : string {
    if (house === House.LANISTER) {
        return 'Hear Me Roar';
    } else if (house === House.STARK) {
        return 'Winter Is Coming';
    } else if (house === House.GREYJOY) {
        return 'We Do Not Sow';
    } else if (house === House.TULLY) {
        return 'Family, Duty, Honor';
    } else if (house === House.TARGARYN) {
        return 'Fire and Blood';
    } else if (house === House.BARATHEON) {
        return 'Ours is the Fury';
    }

}


