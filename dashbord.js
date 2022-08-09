// const earned = document.getElementById("earned");
// const withEarned = document.getElementById("withEarned");
// user = 1000;

// function FetchAllData() {
//     firebase
//         .database()
//         .ref("student")
//         .once("value", function(snapshot) {
//             snapshot.forEach(function(ChildSnapshot) {
//                 let uid = ChildSnapshot.val().user.uid;
//                 let fullName = ChildSnapshot.val().fullName;
//                 let email = ChildSnapshot.val().email;
//                 let bkashNum = ChildSnapshot.val().bkashNum;
//                 let pAmount = ChildSnapshot.val().pAmount;
//                 let user = addItems(uid, fullName, email, bkashNum, pAmount);
//                 console.log(user);
//             });
//         });
// }

// // TASKS BUTTON SELECTORS
// const doneBtn1 = document.getElementById("doneBtn1");
// const doneBtn2 = document.getElementById("doneBtn2");
// const doneBtn3 = document.getElementById("doneBtn3");
// const doneBtn4 = document.getElementById("doneBtn4");
// const doneBtn5 = document.getElementById("doneBtn5");
// const doneBtn6 = document.getElementById("doneBtn6");
// const doneBtn7 = document.getElementById("doneBtn7");
// const doneBtn8 = document.getElementById("doneBtn8");
// const doneBtn9 = document.getElementById("doneBtn9");
// const doneBtn10 = document.getElementById("doneBtn10");

// doneBtn1.addEventListener("click", function(e) {
//     if (user === 1000) {
//         earned + 1;
//     } else if (user === 2000) {
//         let todayEarnAmount = todayEarn + 2;
//     } else if (user === 3000) {
//         let todayEarnAmount = todayEarn + 3;
//     } else {
//         let todayEarnAmount = todayEarn + 5;
//     }
// });

// // user name show
// let userName = document.getElementById("userName");

// function lookupUser(userId) {
//     return $firebaseObject(getRoot().child("users").child(fullName)).$loaded();
// }
// userName.innerHTML = lookupUser();
// let firebaseData = const.database().ref("users");
// firebaseData.once("value",function(snapshot){ // let data=snapshot.val(); for(let i in data) console.log(data[i]); });