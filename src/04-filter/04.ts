export type CourseType = {
    title: string,
    price: number
}

export const Courses = [
    {title: "CSS", price: 100},
    {title: "JS", price: 200},
    {title: "React", price: 150},
    {title: "PHP", price: 90},
]

export const predicate = (course: CourseType) => {
    return course.price < 150
}

export const chipCourses = [
    {title: "CSS", price: 100},
    {title: "PHP", price: 90},

]
