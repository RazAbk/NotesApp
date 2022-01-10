export const utilService = {
    longTxt
}

function longTxt(txt: string, maxLength: number = 80) {
    return txt.length > maxLength ? txt.substring(0, maxLength) + '...' : txt
}