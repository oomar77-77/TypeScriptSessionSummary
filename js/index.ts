
/* 
    primitive types (value typed)
        - number     - string
        -boolean     - undefined 
        - null

    Non-primitive types (reference typed)
        - object     -function
                  -Array



    TypeScript : 
        -void (ولا حاجه)
        -any (ممكن تستخدمها مره ك number , ومره ك string => بنستخدمها لما تجيلي داتا من ال backend)
        -unknown (نسخه من ال any)
        -Array <number>
        -tuple 
        -union
        -alias
        -interface
*/



let x: number = 5;
// x = "" => (js الرئيسي هيطلعلك الكود عادي) هتطلع ايرور بس الفايل بتاع 

let y: string = "";

let z: boolean = false;
// z = 0 => هيطلعلك ايرور

let w: null = null;


let a: undefined = undefined;


let c: object = {

};


/* let b: { name: string } = {} => هيديك ايرور عشان هو مستني ال obj بشكل معين */


let arr: number[] = [10, 12];

let array: Array<number> = [10, 12];


let X: () => number = function () {
    return 5;
};
// (parameters) => ال return

function myFun(): void {
    return;//وقف الفانكشن
}


let M: any = 5; //=> ينفع تكتب اي datatype بعدها


let k: unknown = "";

k = 5.666;
/*  k.toFixed(2) => ايرور ؟ بتبقي موافقه انك تغير ال datatype بس فيه احتمال ايرور يحصل
stricted لما اجي اتعامل مع ال var */

if (typeof k == "number") {
    k.toFixed(2);
}


let Z: [number, string, number] = [10, "omar", 14];

let j: string | number = 10;
j = "omar";

let l: "A" | "B" | "C" = "B";


let user: {
    fName: string,
    lName: string
} = {
    fName: "omar",
    lName: "eid"
};


type User = {
    fName: string,
    lName: string,
    age: number
};

let user1: User = {
    fName: "omar",
    lName: "eid",
    age: 20
}

function myyFun(x: User) {
    x.fName;
};



type Person = {
    name: string;
    age: number;

};

type Employee = {
    salary: number;
};
let O: Person & Employee = {
    name: "OMAR",
    age: 20,
    salary: 2000
};



interface IUser {
    name: string,
    age: number
};


let userName: unknown = "omar"
let P: string = <string>userName /* ال casting ب استخدام ال genaric */
let V: string = userName as string; /* ال casting ب استخدام ال alias */


/* 
    - class => factory of objects (المصنع اللي بيتصنع منه ال objects , واللي بيحدد شكل ال object هيبقي عامل ازاي)
    - object
    - constructor => (method اساسيه ف كل class بيحصلها فاير اوتوماتيك اول ما ت create object جديد)
        -overload => بتختلف في signature الconstructor (سواء عدد ال parameters او انواعها او عددها او اسم الفانكشن)
        بس المبدأ ده مش موجود ف ال typescript

    Accessor specifier Or Accessor modifier [public عام, private خاص, protected]
        Accessor specifier=>احدد كل عنصر هو بابليك ولا برايفت 
                public => جوا و برا ال class
                private => جوا ال class بس
                protected => ليها علاقه بالتوريث

    Encapsulation => عايز اقفل ع العناصر بتاعتي
*/


class Student {
    //properties
    public name: string = "";
    //public age: number = 20;
    private age: number = 20;
    public gender: string = "";
    /* عايز اعمل property انا بس استخدمها من جوا ال class بس يعني ال object ميقدرش يستخدمها */
    //methods
    public study(): void {
        console.log("studying");
        return;
    }
    public constructor(name: string, age: number, gender: string) {
        this.name = name;
        //this.age = age;
        this.gender = gender;
    }
    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void {
        if (age >= 18) {
            this.age = age
        }
        else {
            console.log("Error");
        }

    }

}


let s1: Student = new Student("omar", 30, "male");
s1.name = "omar";
console.log(s1.name);

s1.setAge(10);

console.log(s1.getAge());

class Students {
    //properties
    private name: string = "";
    public constructor(name: string) {
        this.name = name;
    }


    //methods
    public printName() {
        return this.name;
    }
}

let s2: Students = new Students("omar");

console.log(s2.printName());