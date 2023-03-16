
export const updateSrting = (string) => {
    let letters

    if (string.length <= 20) {
        console.log('string <20: ', string);
        return string
    }

    letters = string.slice(0, 19) + "...";
    return letters
}
