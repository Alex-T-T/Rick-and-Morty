
export const updateSrting = (string) => {
    let letters

    if (string.length <= 20) {
        return string
    }

    letters = string.slice(0, 19) + "...";
    return letters
}
