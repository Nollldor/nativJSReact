//1

test("DeepCopy should be correct 1", () => {
    let man = {
        name: 'John',
        age: 28
    };

    let manFullCopy = {...man}

    expect(man).toStrictEqual(manFullCopy)
    expect(man).not.toBe(manFullCopy)
})

//2

test("DeepCopy should be correct 2", () => {
    let numbers = [1, 2, 3];

    let numbersFullCopy = [...numbers]

    expect(numbers).toStrictEqual(numbersFullCopy)
    expect(numbers).not.toBe(numbersFullCopy)
})


//3

test("DeepCopy should be correct 3", () => {
    let man1 = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    let man1FullCopy = {...man1, mother: {...man1.mother}}

    expect(man1).toStrictEqual(man1FullCopy)
    expect(man1).not.toBe(man1FullCopy)
    expect(man1.mother).not.toBe(man1FullCopy.mother)
})


//4

test("DeepCopy should be correct 4", () => {
    let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    let man2FullCopy = {...man2, friends: [...man2.friends]}

    expect(man2).toStrictEqual(man2FullCopy)
    expect(man2).not.toBe(man2FullCopy)
    expect(man2.friends).not.toBe(man2FullCopy.friends)
})

//5

test("DeepCopy should be correct 5", () => {
    let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];


    let peopleFullCopy = people.map(el => ({...el}))

    expect(people).toStrictEqual(peopleFullCopy)
    expect(people).not.toBe(peopleFullCopy)
    expect(people[1]).not.toBe(peopleFullCopy[1])
})

//6

test("DeepCopy should be correct 6", () => {
    let man3 = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };


    let man3FullCopy = {...man3, friends: man3.friends.map(el => ({...el}))}


    expect(man3).toStrictEqual(man3FullCopy)
    expect(man3.friends).not.toBe(man3FullCopy.friends)
    expect(man3.friends[1]).not.toBe(man3FullCopy.friends[1])
})

//7


test("DeepCopy should be correct 7", () => {
    let man4 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            }
        }
    };

    let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}


    expect(man4).toStrictEqual(man4FullCopy)
    expect(man4.mother).not.toBe(man4FullCopy.mother)
    expect(man4.mother.work).not.toBe(man4FullCopy.mother.work)
})


//8

test("DeepCopy should be correct 8", () => {
    let man5 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };

    let man5FullCopy = {
        ...man5,
        mother: {...man5.mother, work: {...man5.mother.work}, parents: man5.mother.parents.map(el => ({...el}))}
    }


    expect(man5).toStrictEqual(man5FullCopy)
    expect(man5.mother).not.toBe(man5FullCopy.mother)
    expect(man5.mother.work).not.toBe(man5FullCopy.mother.work)
    expect(man5.mother.parents).not.toBe(man5FullCopy.mother.parents)
    expect(man5.mother.parents[1]).not.toBe(man5FullCopy.mother.parents[1])
})

//9

test("DeepCopy should be correct 9", () => {
    let man6 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht"
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi"
                    }
                },
            ]
        }
    };

    let man6FullCopy = {
        ...man6,
        mother: {
            ...man6.mother,
            work: {...man6.mother.work},
            parents: man6.mother.parents.map(el => ({...el, favoriteDish: {...el.favoriteDish}}))
        }
    }


    expect(man6).toStrictEqual(man6FullCopy)
    expect(man6.mother).not.toBe(man6FullCopy.mother)
    expect(man6.mother.work).not.toBe(man6FullCopy.mother.work)
    expect(man6.mother.parents).not.toBe(man6FullCopy.mother.parents)
    expect(man6.mother.parents[1]).not.toBe(man6FullCopy.mother.parents[1])
    expect(man6.mother.parents[0].favoriteDish).not.toBe(man6FullCopy.mother.parents[0].favoriteDish)
})

//10

test("DeepCopy should be correct 10", () => {
    let man7 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht",
                        ingredients: [
                            {title: "beet", amount: 3},
                            {title: "potatoes", amount: 5},
                            {title: "carrot", amount: 1},
                        ]
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi",
                        ingredients: [
                            {title: "fish", amount: 1},
                            {title: "rise", amount: 0.5}
                        ]
                    }
                },
            ]
        }
    };

    let man7FullCopy = {
        ...man7,
        mother: {
            ...man7.mother,
            work: {...man7.mother.work},
            parents: man7.mother.parents.map(el => ({
                ...el,
                favoriteDish: {...el.favoriteDish, ingredients: el.favoriteDish.ingredients.map(el => ({...el}))}
            }))
        }
    }


    expect(man7).toStrictEqual(man7FullCopy)
    expect(man7.mother).not.toBe(man7FullCopy.mother)
    expect(man7.mother.work).not.toBe(man7FullCopy.mother.work)
    expect(man7.mother.parents).not.toBe(man7FullCopy.mother.parents)
    expect(man7.mother.parents[1]).not.toBe(man7FullCopy.mother.parents[1])
    expect(man7.mother.parents[0].favoriteDish).not.toBe(man7FullCopy.mother.parents[0].favoriteDish)
    expect(man7.mother.parents[0].favoriteDish.ingredients).not.toBe(man7FullCopy.mother.parents[0].favoriteDish.ingredients)
    expect(man7.mother.parents[0].favoriteDish.ingredients[0]).not.toBe(man7FullCopy.mother.parents[0].favoriteDish.ingredients[0])
})