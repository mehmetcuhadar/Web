const getAverage = (a: number, b: number, c?: number): string => {
    let total = a + b;
    let count = 2;
    if (typeof c !== "undefined") {
        total += c;
        count++;
    }
    const result = (total) / count;

    return "result: " + result;
}

function getget(...a: number[]): string {
    let total = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    const result = (total) / count;

    return "result: " + result;
}



getAverage(10, 20, 30);
getAverage(10, 20);
getget(10, 102325, 21321, 132, 132, 12, 1, 32, 1, 32, 1, 321, 54, 65, 54, 65, 4, 32, 1,);