// // Task 1

// let user = {
//             name: "Navalniy", 
//             gender: "male",
//             birthday: "01/01/1990"
//         }
// console.log(user.birthday);

// // Task 2

// user.age = 2026 - user.birthday.split("/")[2];
// delete user.birthday;
// console.log(user);

// // Task 3

// user.setAge = function(newAge) {
//     user.age = newAge;
// };
// user.getYearsBeforeRetirement = function() {
//     if (user.gender === "male") {
//         return 65 - user.age;
//     } else {
//         return 64 - user.age;
//     }
// };
// user.setAge(35);
// console.log(user.age);
// console.log(user.getYearsBeforeRetirement());

// Task 4

// let client = {
//     fullName: "Aleksei",
//     creditLimit: 5000,
//     balance: -2000,
//     precentOfMinPayment: 10, 
//     getBalance() {
//         if (this.balans < 0) {
//             return `Borcunuz ${-this.balance}`;
//         }
//         return `Balansınız ${this.balance}`;
//     },
//     getMinPayment() {
//         if (this.balance < 0) {
//             return `Minimum ödəniş ${(-this.balance * this.precentOfMinPayment)/100}`
//         }
//         return 'Sizin borcunuz yoxdur'
//     },
//     withdraw(amount) {
//         if (amount <= this.balance + this.creditLimit){
//             this.balance -= amount;
//         }
//         else {
//             console.log('Balansınız kifayət qədər deyil');
//         }
//     }
// };
// console.log(client.getBalance());
// console.log(client.getMinPayment());
// client.withdraw(3000);
// console.log(client.getBalance());

// Task 5