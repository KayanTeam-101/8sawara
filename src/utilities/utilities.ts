function period(num1: number, num2: number): Array<number> {
    let result: Array<number> = [];
    for (let i = num1; i <= num2; i++) {
        result.push(i);
    }
    return result;
}

function TranslateHeight(value: number): string {
    return `translateY(${value}px)`;
}

export { period, TranslateHeight };