type LessonsType = {title:string}[]

export type ManType = {
    name: string
    age: number
    lessons: LessonsType
    address: {
        street: {
            title: string
        }
    }
}

let props:ManType
beforeEach(()=>{
    props = {
        name: "Dymich",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Letchikov"
            }
        }
    }
})

test("", () => {

    /*const age = props.age
    const lessons = props.lessons*/

    const {age, lessons} = props
    const {title} = props.address.street



    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Letchikov")
})

function useDimychState(m:string){
    return [m, function (){}]
}

test("", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1,ls2] = props.lessons

    const [message, setMessage] = useDimychState("hello")

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")

})