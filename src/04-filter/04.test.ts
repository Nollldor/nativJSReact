import {chipCourses, Courses, predicate} from "./04";

test("filter predicate should be correct",()=>{
    expect(Courses.filter(predicate)).toStrictEqual(chipCourses)
})