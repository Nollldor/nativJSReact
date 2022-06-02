export type ManType = {
    name: string,
    age: number
}

export type DevType = {
    stack: Array<string>,
    firstName: string,
    lastName: string,
}

export const people: Array<ManType> = [
    {name: "Arthur Ishmiev", age: 30},
    {name: "Kristina Ishmieva", age: 29},
    {name: "Ayrat Ishmiev", age: 16},
    {name: "Olesya Konuhova", age: 30},
    {name: "Roman Shabrin", age: 21},

]

export const devs: Array<DevType> = [
    {
        stack: ["css", "js", "html", "react", "tdd"],
        firstName: "Arthur",
        lastName: "Ishmiev",
    }, {
        stack: ["css", "js", "html", "react", "tdd"],
        firstName: "Kristina",
        lastName: "Ishmieva",
    },
    {
        stack: ["css", "js", "html", "react", "tdd"],
        firstName: "Ayrat",
        lastName: "Ishmiev",
    },
    {
        stack: ["css", "js", "html", "react", "tdd"],
        firstName: "Olesya",
        lastName: "Konuhova",
    },
    {
        stack: ["css", "js", "html", "react", "tdd"],
        firstName: "Roman",
        lastName: "Shabrin",
    },
]

export const transformator = (man: ManType) => ({
    stack: ["css", "js", "html", "react", "tdd"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
})





