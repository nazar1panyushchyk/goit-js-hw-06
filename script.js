import users from "./users.js";

// task1
// const getUserNames = users => {
//     users.forEach((user) => {
//         console.log(user.name);
//     })
//   };
  
//     console.log(getUserNames(users));

// task2
// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color);
//   };

//     console.log(getUsersWithEyeColor(users, 'blue'));

// task3
// const getUsersWithGender = (users, gender) => {
//     return users.filter(user => user.gender === gender)
//     .map((user) => user.name);
//   };
  
//   console.log(getUsersWithGender(users, 'male'));

// task4
// const getInactiveUsers = users => {
//     return users.filter(user => user.isActive)
//   };
  
//   console.log(getInactiveUsers(users));

// task5
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email)
//   };
  
//   console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
//   console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// task6
// const getUsersWithAge = (users, min, max) => {
//     return users.filter(user => user.age > min && user.age < max)
//   };
  
//   console.log(getUsersWithAge(users, 20, 30));
  
//   console.log(getUsersWithAge(users, 30, 40));

// task7
// const calculateTotalBalance = users => {
//     return users.reduce((totalBalance, userBalance) => totalBalance + userBalance.balance, 0)
//   };
  
//   console.log(calculateTotalBalance(users));

// task8
// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName))
//   };
  
//   console.log(getUsersWithFriend(users, 'Briana Decker'));
//   console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// task9
// const getNamesSortedByFriendsCount = users => {
//     return users.sort((a, b) => a.friends.length - b.friends.length)
//   };
  
//   console.log(getNamesSortedByFriendsCount(users));

// task10
// const getSortedUniqueSkills = users => {
//     const allSkills = users.flatMap(user => user.skills);
    
//     const uniqueSkills = [...new Set(allSkills)];
//     return uniqueSkills.sort();
//   };
  
//   console.log(getSortedUniqueSkills(users));