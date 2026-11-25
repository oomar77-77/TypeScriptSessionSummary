"use strict";
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
let x = 5;
// x = "" => (js الرئيسي هيطلعلك الكود عادي) هتطلع ايرور بس الفايل بتاع 
let y = "";
let z = false;
// z = 0 => هيطلعلك ايرور
let w = null;
let a = undefined;
let c = {};
/* let b: { name: string } = {} => هيديك ايرور عشان هو مستني ال obj بشكل معين */
let arr = [10, 12];
let array = [10, 12];
let X = function () {
    return 5;
};
// (parameters) => ال return
function myFun() {
    return; //وقف الفانكشن
}
let M = 5; //=> ينفع تكتب اي datatype بعدها
let k = "";
k = 5.666;
/*  k.toFixed(2) => ايرور ؟ بتبقي موافقه انك تغير ال datatype بس فيه احتمال ايرور يحصل
stricted لما اجي اتعامل مع ال var */
if (typeof k == "number") {
    k.toFixed(2);
}
let Z = [10, "omar", 14];
let j = 10;
j = "omar";
let l = "B";
let user = {
    fName: "omar",
    lName: "eid"
};
let user1 = {
    fName: "omar",
    lName: "eid",
    age: 20
};
function myyFun(x) {
    x.fName;
}
;
let O = {
    name: "OMAR",
    age: 20,
    salary: 2000
};
;
let userName = "omar";
let P = userName; /* ال casting ب استخدام ال genaric */
let V = userName; /* ال casting ب استخدام ال alias */
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
    name = "";
    //public age: number = 20;
    age = 20;
    gender = "";
    /* عايز اعمل property انا بس استخدمها من جوا ال class بس يعني ال object ميقدرش يستخدمها */
    //methods
    study() {
        console.log("studying");
        return;
    }
    constructor(name, age, gender) {
        this.name = name;
        //this.age = age;
        this.gender = gender;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        if (age >= 18) {
            this.age = age;
        }
        else {
            console.log("Error");
        }
    }
}
let s1 = new Student("omar", 30, "male");
s1.name = "omar";
console.log(s1.name);
s1.setAge(10);
console.log(s1.getAge());
class Students {
    //properties
    name = "";
    constructor(name) {
        this.name = name;
    }
    //methods
    printName() {
        return this.name;
    }
}
let s2 = new Students("omar");
console.log(s2.printName());
//# sourceMappingURL=index.js.map