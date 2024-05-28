import inquirer from "inquirer";

const randomNumber:number = Math.floor(10000 + Math.random()* 90000)

let myBalance:number = 0

let answer = await inquirer.prompt(
    [
        {
            name: "student",
            type: "input",
            message:" Entre student name",
            validate : function(value){
                if(value.trim() !== ""){
                    return true;
                }
                return "please entre number"
            }
        },
        {
            name:"courses",
            type:"list",
            message:"select the course to enroll",
            choices: ["MS Office", "HTML", "Typescript", "Javascript", "Python"]
        }
    ]
);

const tutionFee: {[key:string]:number} = {
    "MS Office": 2000,
    "HTML" : 2500,
  "Typescript": 3000,
   "Javascript" : 3500,
   "Python": 4000
};
console.log(`\n tution fee : ${tutionFee[answer.courses]}/-\n`);
console.log(` Balance : ${myBalance}\n`)

let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["Easypaisa", "jazzcash", "bank account"]
    },
    {
        name:"amount",
        type: "input",
        message: "transfer money",
        validate: function(value){
            if (value.trim() !== ""){
                return true;
        } 
        return "please entre value"
    }
}
]);
console.log(`\n you select payment method ${paymentType.payment}\n`);

const tutionFees = tutionFee[answer.courses]
const paymentAmount = parseFloat(paymentType.amount)

if(tutionFees === paymentAmount){
    console.log(`Congratulation you have sucessfully enrolled in ${answer.course}.\n`);

    let ans = await inquirer.prompt([
        {
            name:"select",
            type: "list",
            message: "what would you like to do next",
            choices:["view status", "exit"]
        }
    ])
    if (ans.select === "view status"){
        console.log("\n******status******\n");
        console.log(`student name: ${answer.student}`);
        console.log(`student id: ${randomNumber}`);
        console.log(`course: ${answer.courses}`);
        console.log(`Tution fees paid: ${paymentAmount}`);
        console.log(`balance: ${myBalance += paymentAmount}`);
    } else {
        console.log("\n Exiting student management system\n");
    }
} else{
    console.log("Invalid amount for the course\n");
}





