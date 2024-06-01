// 1-savol

// function Oylar(OySoni) {
//     let monthName;

//     switch (OySoni) {
//         case 1:
//             monthName = "Yanvar";
//             break;
//         case 2:
//             monthName = "Fevral";
//             break;
//         case 3:
//             monthName = "Mart";
//             break;
//         case 4:
//             monthName = "Aprel";
//             break;
//         case 5:
//             monthName = "May";
//             break;
//         case 6:
//             monthName = "Iyun";
//             break;
//         case 7:
//             monthName = "Iyul";
//             break;
//         case 8:
//             monthName = "Avgust";
//             break;
//         case 9:
//             monthName = "Sentabr";
//             break;
//         case 10:
//             monthName = "Oktabr";
//             break;
//         case 11:
//             monthName = "Noyabr";
//             break;
//         case 12:
//             monthName = "Dekabr";
//             break;
//         default:
//             monthName = "SOG BOLASIZ BU SONGA TOGRI KELADIGAN OY YOQ";
//     }

//     return monthName;
// }

// let OySoni = +prompt("Iltimos 1-12 gacha son kiriting");
// console.log(Oylar(OySoni));


// 2-savol


// function ballHisoblari() {
//     let son = +prompt("Son Kiriting");
//     if (son >= 0 && son <= 100) {
//         switch (true) {
//             case son >= 90:
//                 alert("A");
//                 break;
//             case son >= 80:
//                 alert("B");
//                 break;
//             case son >= 70:
//                 alert("C");
//                 break;
//             case son >= 60:
//                 alert("D");
//                 break;
//             default:
//                 alert("F");
//                 break;
//         }
//     } else {
//         alert("Iltimos, 1 va 100 oralig'ida son kiriting");
//     }
// }

// ballHisoblari();


// 3-savol

// function func() {
//     let vaqt;
//     do {
//         vaqt = +prompt("Vaqtni kiriting (soatlarda):");
//         if (vaqt < 0 || vaqt > 24) {
//             alert("Iltimos, 0 va 24 orasidagi to'g'ri vaqtni kiriting");
//         }
//     } while (vaqt < 0 || vaqt > 24);

//     if (vaqt >= 5 && vaqt < 12) {
//         alert("Xayrli tong");
//     } else if (vaqt >= 12 && vaqt < 17) {
//         alert("Xayrli kun");
//     } else if (vaqt >= 17 && vaqt < 21) {
//         alert("Xayrli kech");
//     } else {
//         alert("Xayrli tun");
//     }
// }

// func();



// 4-savol


// function func(num1) {
//     let raqam = +prompt(`Iltimos, ${num1} raqamini kiriting:`);
//     while (+raqam !== num1) {
//         alert("notogri");
//         raqam = prompt(`Iltimos, ${num1} raqamini kiriting:`);
//     }
//     alert("son kiriting " + raqam);
// }

// func(4);


// 5-savol

// function func() {
//     let son = 5;
//     do {
//         if (son % 2 === 0) {
//             console.log(son);
//         }
//         son++;
//     } while (son <= 20);
// }

// func();


// 6-savol

// function xabarKiritish() {
//     let xabar = prompt("xabr kiriting stop kiritsangiz tohtidi");
//     while (xabar.toLowerCase() !== "stop") {
//         alert("Siz kiritgan xabar" + xabar);
//         xabar = prompt("tohtash ushun stop yozing");
//     }
//     alert("toxtadi");
// }

// xabarKiritish();

// 7-savol

// function hisoblashOrtachasini(arg1) {
    // let n = +prompt("Iltimos son kiriting");
//     let natija = n / 2
//     console.log(natija);
// alert(natija)
// }

// hisoblashOrtachasini()



