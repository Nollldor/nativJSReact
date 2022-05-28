import {student, StudentType} from "../02-objects/02";
import {CityType} from "../02-objects/02-02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    return student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export const isStudentLiveIn = (s: StudentType, c: string) => {
    return s.address.city.cityTitle === c;
}