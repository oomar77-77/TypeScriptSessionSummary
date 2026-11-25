declare let x: number;
declare let y: string;
declare let z: boolean;
declare let w: null;
declare let a: undefined;
declare let c: object;
declare let arr: number[];
declare let array: Array<number>;
declare let X: () => number;
declare function myFun(): void;
declare let M: any;
declare let k: unknown;
declare let Z: [number, string, number];
declare let j: string | number;
declare let l: "A" | "B" | "C";
declare let user: {
    fName: string;
    lName: string;
};
type User = {
    fName: string;
    lName: string;
    age: number;
};
declare let user1: User;
declare function myyFun(x: User): void;
type Person = {
    name: string;
    age: number;
};
type Employee = {
    salary: number;
};
declare let O: Person & Employee;
interface IUser {
    name: string;
    age: number;
}
declare let userName: unknown;
declare let P: string;
declare let V: string;
declare class Student {
    name: string;
    private age;
    gender: string;
    study(): void;
    constructor(name: string, age: number, gender: string);
    getAge(): number;
    setAge(age: number): void;
}
declare let s1: Student;
declare class Students {
    private name;
    constructor(name: string);
    printName(): string;
}
declare let s2: Students;
//# sourceMappingURL=index.d.ts.map