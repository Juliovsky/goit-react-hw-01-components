const colors = ["rgb(111 194 240)", "rgb(148 76 236)", "rgb(212 88 104)", "rgb(88 181 196)", "rgb(88 181 196)", "rgb(237 135 79)"];

export function choseRandomColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    let color = colors[randomIndex];
    return color;
}


