console.log(1231234);

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
    return {
        color: '123',
        area: 234
    };
}

let mySquare = createSquare({ width: 100 });
