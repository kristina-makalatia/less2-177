"use strict";

//array - nested
let userNames = ["ani", "nino", "lasha", "luka"];
//     0      1        2        3

console.log(userNames[3]);
console.log(userNames[userNames.length - 2]);

//object
let userInfo = {
  userName: "nika",
  userAge: 25,
  userStatus: "active",
  userHobbies: ["reading", "cooking"],
  userPhone: {
    code: 597,
    number: 54545454,
  },
  userComments: [
    {
      commentId: 1,
      commentText: "Helllo1",
    },
    {
      commentId: 2,
      commentText: "Hello2",
    },
  ],
};

// 1. dot notation
console.log(userInfo.userComments[0].commentText);

// 2. bracket notation
console.log(userInfo["userComments"][0]["commentText"]);

let userNewInfo = {
  userStatus: true,
  username: "levani",
};

userNewInfo.username = "lasha";
userNewInfo.userage = 30;
delete userNewInfo.userStatus;

console.log(userNewInfo);

// loop array

let names = ["anna", "mariami", "salome", "dato", "nini", "nika", "beka"];

// 1.for loop
// for (let i = 2; i <= 4; i++) {
//     console.log(names[i]);
// }

// for of -> values
for (let item of names) {
  console.log(item);
}

// for in -> index
for (let elemnt in names) {
  console.log(elemnt);
}

//
let newArray = [
  [15, 200, 14],
  [36, 144, 6],
  [7, 19, 37],
];

for (let item of newArray) {
  // console.log(item);
  for (let value of item) {
    console.log(value);
  }
}

// for (let i = 0; i < newArray.length; i++) {
//   const nestedArray = newArray[i];
//   //   console.log(nestedArray); // [15, 200, 14] [36, 144, 6]  [7, 19, 37]
//   for (let item = 0; item < nestedArray.length; item++) {
//     const arrayValue = nestedArray[item];
//     console.log(arrayValue);
//   }
// }

// while
let namesUsers = ["ani", "luka", "mariami"];

let index = 0;
while (index < namesUsers.length) {
  console.log(namesUsers[index]);
  index++;
}



// 
let numbernewArray = [14, 25, 36, 187, 364, 20, 13];

for (let item of numbernewArray) {
    if (item > 100) {
        console.log(item);
    }
}