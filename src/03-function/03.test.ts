import {StudentType} from "../02-objects/02";
import {addSkill, isStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Arthur",
        sex: "male",
        age: 30,
        isActive: false,
        address: {
            street: "Letchikov",
            city: {
                cityTitle: "Ufa",
                cityCountry: "Russia"
            }
        },
        technologies: [
            {
                id: 1,
                title: "css"
            },
            {
                id: 2,
                title: "react"
            },
            {
                id: 3,
                title: "js"
            },
            {
                id: 4,
                title: "html"
            },
        ]

    }
})

test("new tech skill should be added", () => {
    addSkill(student, "English");
    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe("English");
    expect(student.technologies[4].title).toBeDefined();
})

test("student should be made active", () => {
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
})

test("does student live in Moscow", () => {
    let result1 = isStudentLiveIn(student, "Moscow");
    let result2 = isStudentLiveIn(student, "Ufa");

    expect(result1).toBe(false);
    expect(result2).toBe(true);

})