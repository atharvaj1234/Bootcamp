// const {name,phone,email}=student;


// const names = ["Name1","Name2","Name3","Name4"]
// function printnames(){
//     for (let i in names){
//         console.log(names[i]);
//     }
// }

// function printnamesbyindex(){
//     for (let i=0; i<names.length ;i++){
//         console.log(names[i])
//     }
// }

// =====================================================================================================================
    // Read Documentation and read array functions
    // Diffirence between static propertities and instance methods (mozilla developer network)

    // Problem Statement
// =====================================================================================================================
const emp = {
    name: "name",
    company: "company",
};

const employee = [{
    name: "name1",
    company: "company1",
},
{
    name: "name2",
    company: "company2",
},
{
    name: "name3",
    company: "company3",
},
{
    name: "name4",
    company: "company4",
},
{
    name: "name5",
    company: "company5",
},
{
    name: "name6",
    company: "company6",
}];

function printWelcome(obj){
    const {name, company}=obj;
    console.log("Hello "+name+", Welcome to company.")
    console.log("Your email is", name+"@"+company+".com");
}

function printWelcomeForAll(){
    for(let i in  employee){
        printWelcome(employee[i]);
    }
}

// ==============================================================
// Array Functions

employee.forEach((obj)=>{
    console.log("For", obj.name);
});

const empUpdated= employee.map((obj)=>{
    return {...obj ,email: `${obj.name}@${obj.company}.com`};
});