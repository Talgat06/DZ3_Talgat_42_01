
    let a = 10;
        b = 5;
    function func(a, b) {
        console.log(Math.min(a, b));
    }

    func(a, b);

    function get() {
        const user = prompt("Введите строку:");
        console.log(user.length);
    }

    get();

    function calculator(c, d, numbers) {
        switch (numbers) {
            case '+':
                return c + d;
            case '-':
                return c - d;
            case '*':
                return c * d;
            case '/':
                if (d === 0) {
                    return "Делить на ноль нельзя ! ";
                }
        }
    }

    console.log(calculator(20, 2, '+'));
    console.log(calculator(20, 2, '-'));
    console.log(calculator(20, 2, '*'));
    console.log(calculator(20, 0, '/'));
