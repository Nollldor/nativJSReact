

export const usersObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType =  {
    [key: string]: {id: number, name:string}
}


const user = {id: 100500, name: "Igor"}

users[user.id] = user
delete users[user.id]

console.log(users[1])//здесь сложность O(1)

export const usersArray = [
    {id: 101, name: "Dimych"},
    {id: 3232312, name: "Natasha"},
    {id: 1212, name: "Valera"},
    {id: 1, name: "Katya"},
]

console.log((usersArray.find(user=>user.id===1)))//здесь сложность O(n)