import {devs, people, transformator} from "./05";

test("map transformator should be correct",()=>{
    expect(people.map(transformator)).toStrictEqual(devs)
})