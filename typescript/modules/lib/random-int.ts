
export default (max? : number) : number => {
    if(!max) {
        max = 1000000;
    }

    return Math.floor( max * Math.random());
}
