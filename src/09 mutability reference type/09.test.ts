type UserType = {
    name: string
    age: number
}

type UserTypeWithAddress = UserType & {
    address: {
        title: string
    }
}

function increaseAge(u: UserType) {
    u.age++
}

test('big test', () => {


    const user: UserType = {
        name: "Arthur",
        age: 30,
    }

    increaseAge(user)
    expect(user.age).toBe(31)

    const superman = user

    superman.age = 1000

    expect(superman.age).toBe(1000)
})

test('reference type test', () => {


    const user: UserTypeWithAddress = {
        name: "Arthur",
        age: 30,
        address: {
            title: "Spb"
        }
    }

    let addr = user.address

    const user2: UserTypeWithAddress = {
        name: "Kristina",
        age: 29,
        address: user.address
    }

    user2.address.title = "Kanary"

    expect(user.address.title).toBe("Kanary")
    expect(user.address).toBe(user2.address)
})

test('reference type array test', () => {

    const address = {
        title: "Spb"
    }
    const user: UserTypeWithAddress = {
        name: "Arthur",
        age: 30,
        address: address
    }

    let addr = user.address

    const user2: UserTypeWithAddress = {
        name: "Kristina",
        age: 29,
        address: address
    }

    const users = [user, user2, {name: "Katya", age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name = "Dmitry"

    expect(users[0].name).toBe("Dmitry")
    expect(user.name).toBe("Dmitry")

})

test("array test", () => {
    const users = [
        {
            name: "Arthur",
            age: 30,
        },
        {
            name: "Arthur",
            age: 30,
        }
    ]

    let admins = users
    admins.push({name: "Bandugan", age: 10})

    expect(users[2]).toEqual({name: "Bandugan", age: 10})
})

test("value type test", () => {
    const usersCount = 100

    let adminsCount = usersCount
    adminsCount = adminsCount + 1

    expect(usersCount).toBe(100)
})