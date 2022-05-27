import {sum} from "./01";
import {multiply} from "./01";


let a: number;
let b: number;
let c: number;

//если значение во время первого теста изменится
//перед вторым обновим исходные данные
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test("sum should be correct", () => {
    //data
    /*let a = 1;
    let b = 2;
    let c = 3;*/

    //action
    let result1 = sum(a, b);
    a = 100;
    let result2 = sum(a, c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(103);
})

test("multiply should be correct", () => {
    //data
    /*let a = 1;
    let b = 2;
    let c = 3;*/

    //action
    let result1 = multiply(a, b);
    let result2 = multiply(a, c);

    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(3);
})