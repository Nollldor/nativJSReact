type LocalCityType = {
    cityTitle: string,
    cityCountry: string

}

type AddressType = {
    street: string,
    city: LocalCityType
}

type TechType = {
    id: number,
    title: string
}

type StudentType = {
    id: number,
    name: string,
    sex: string,
    age: number,
    address: AddressType,
    technologies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: "Arthur",
    sex: "male",
    age: 30,
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

console.log(student.technologies[2].title);