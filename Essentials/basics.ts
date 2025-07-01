let userName: string;//number | boolean
// this is example on type assignmen - type annotation
let userAge = 13;
//let userAge: number = 13; -> valid but useless
userName = "Aly";
//userAge = "13"; -> error due to type inference

// i can use types in 

function add(a:number, b:number){
    return a+b;
}

//-------flexible types--------
//The any type
let age: any = 30;

//...
age = "30";
//The union type
let number: number | string = 13;
//...
number = "22";

//---------Arrays and Objects----
let hobbies = ['Sports','Cooking'];

//hobbies.push(10); Error

let users: (string | number)[];
let records: Array<string | number>;//generic type
users = [1,"Ahmed"];
users = [1,2];
users = ["Ahemd", "Aly"];

records = [50,"r1"];
records = [50,60];
records = ['r1','r2'];
//---tuples---
let possibleResults: [number, number];
possibleResults = [1,-1];

//---objects---
let user: {
    name: string;
    age: number;
    hobbies: string[];
    role: {
        id:number;
        description: string
    }
}
user ={
    name:"Hossam",
    age: 15,
    hobbies:[
        "Football", "Reading"
    ],
    role:{
        id:111,
        description:"VIP"
    }
};
//this syntax not related to object type
let val: {}="some text"; // the curley brackets here means any value that is not undefined or null

//---use this in case I want to assign object but don't know yet what is my key-value pairs ---//
let data: Record<string | number,any>;

data ={
    firstEntry: 1,
    2:{
        type:"bytes",
        size:512
    }
}

//-----Enum Types----
enum Role {
    Admin = 5,
    Editor,
    Guest
}

let userRole: Role;
userRole = Role.Admin
userRole = 6
//userRole = 1 //->Error

//another way to use enum like solution
let newRole: 'Admin' | 'Editor' | 'Guest' = "Admin";

let tuple: [1|-1, 1|-1];
tuple = [-1,-1]
//---Type Aliases | Custom Types---
type AccessRole = 'Admin' | 'Editor' | 'Guest' |'Reader';

let userType:AccessRole;
userType = "Reader"

type userPermissions = "Read" | "Write" | "Edit" | "Delete";

type User = {
    name: string;
    age: number;
    role: AccessRole;
    permissions: userPermissions[];
}

let newUser: User = {
    name:'Abc',
    age: 20,
    role: "Editor",
    permissions: [
        "Write",
        "Read",
        "Edit"
    ]
};

function handleRoles(role: AccessRole){

}