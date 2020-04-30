//                      HomeWork 27.04.20
//first task
let dogObj = {
    name: 'Bumer',
    weight: 4,
    age: 2,
    speed : 15
}
function buttonDog (){
    function getObjInfo (){
        for (let i in dogObj){
            console.log(`${i} = ${dogObj[i]}; `);
        }
    }
    getObjInfo();
}

function countTime (){
    let distance = +prompt('Введіть відстань яку має подолати собачка в кілометрах');
    function checkTime (distance) {
        let time = Number(distance) / dogObj.speed;
        if (time < 12){
            alert(`Собачка подолає ${distance} км за ${time} годин (без відпочинку)`);
        } else {
            time = Math.ceil((time * 2) / 24);
            alert(`Собачка подолає ${distance} км за ${time} днів (враховуючи відпочинок)`);
        }
    }
    checkTime(distance);
}

function renameDog (){
    let flag = confirm('Бажаєте перейменувати собачку?');
    if (flag){
        let b = dogObj.name;
        dogObj.name = prompt('Як хочете назвати собачку?');
        alert(`Тепер ${b} буде зватись ${dogObj.name} !`);
    } else{
        alert('Бувайте!)');
    }
    buttonDog();  //дізнаюся чи перезаписалися зміни!
}

//second task
let figureObj = {
    dovzina: [],
    dovzinaAdd: function dovzinaAdd (){
        this.dovzina.push(+prompt('введіть 1 сторону фігури'));
        this.dovzina.push(+prompt('введіть 2 сторону фігури'));
//          function getObjInfo (){
//              for (let i in figureObj)
//                  console.log(`${i} = ${figureObj[i]}; `);    
//          }
//          getObjInfo();
    },
    perimetr: function countPerim (){
        let perim = (this.dovzina[0] + this.dovzina[1]) * 2;
        alert(`Периметр = ${perim}`);   //Як зробити історію обрахунків?
    },
    area: function countArea (){
        let figureArea = this.dovzina[0] * this.dovzina[1];
        alert(`Площа = ${figureArea}`);   //Як зробити історію обрахунків?
    },
    name: function createName (){
        if (this.dovzina[0] === this.dovzina[1]){
            alert('Квадрат');
        } else {
            alert('Прямокутник');
        }
    },
    inMeter: function fromSmToMeter (){
        let meterFirst = figureObj.dovzina[0] / 100;
        let meterSecond = figureObj.dovzina[1] / 100;
        alert(`Значення у метрах ${meterFirst} та ${meterSecond}`);
    },
}



//third task
let store = {
   
    tomato: {
        
        count: 5,
        price: 50,
        buy: false,
        outOfstore: true  
    },
    
    apple: {
        
        count: 5,
        price: 20,
        buy: false,
        outOfstore: false
    },
    
    potato: {
    
        count: 60,
        price: 25,
        buy: false,
        outOfstore: false
    },
    
    banana: {
        
        count: 15,
        price: 30,
        buy: false,
        outOfstore: false
    },
    
    orange: {
        
        count: 8,
        price: 40,
        buy: false,
        outOfstore: true
    }
}

function checkAvail (){
    let avail = [];
    let notAvail = [];
    for (let i in store){    
        if (store[i].outOfstore === false){
            avail.push(i);
        } else {
            notAvail.push(i);
        }
           
    }
        console.log(`Наявні товари в магазині ${avail}`);    
        console.log(`Товари, що відсутні в магазині ${notAvail}`);
}

let busket = [];

function shopping (){
    let product = prompt('Що бажаєте придбати?');
    for (let i in store){
        if ( store[i] === store[product]){
                if(store[i].outOfstore === false){
                    let c = store[i].price;
                    let b = howMuchProd(store[i].count); //зробити виклик методу для збільшення кількості товару;
                    if (b > 1 ){
                    let nameProd = {
                        name: i,
                        count: b,
                        price: c * b
                    };  
                    busket.push(nameProd);
                    alert('good');
                        }
                } else {
                    alert('Цього товару немає в наявності');
                }
            } 
    }    
}

function showMyBusket (){
    for (let k = 0; k < busket.length; k++){
        console.log(busket[k]);
    }
}

function howMuchProd (input){
    let much = +prompt('Скільки одиниць товару хочете придбати?');
    if (much < 0 || much > input){
        alert('Error');
    } else {
        return much;
    }
    
}

function mustPay(){
    let totalPrice = 0;
    for (let i = 0; i < busket.length; i++){
        totalPrice += busket[i].price;
    }
    console.log(`Вартість куплених Вами товарів складає ${totalPrice}`);
}

//fourth task

let collection = [
                  {name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, 
                  {name: "Yulia", age: 34, hobby: ["films", "swimming", "hiking"], type: "User"}, 
                  {name: "Ilona", age: 18, hobby: ["films", "cooking", "shopping"], type: "User"},
                  {name: "Andrew", age: 22, hobby: ["films", "games", "football"], type: "Admin"}
                 ];

function lookingForAdmin (){
    for (let i = 0; i < collection.length; i++){
        if (collection[i].type === 'Admin'){
        console.log(collection[i]);
            }
    }
}

function averageAge (){
    let age = 0;
    for (let k = 0; k < collection.length; k++){
        age+= collection[k].age;
    }
    age = Math.round(age / collection.length);
    console.log(`Середній вік працівників становить: ${age} `);
}

function interestingHobbie (){
    let hobbie = [];
    let differentHobbies = [];
    let count = 0;
        for (let i = 0; i< collection.length; i++){
            hobbie = hobbie.concat(collection[i].hobby);
        }  
  //  console.log(hobbie);
        for (let k = 0; k < hobbie.length; k++){
            let hobElem = hobbie[k];
            count = 0;  //лічильник кількості співпадінь
            for (let j = 0; j < hobbie.length; j++){
                if (hobElem === hobbie[j]){
                    count++
                }
            }
            if (count <= 1){
                    differentHobbies.push(hobElem);
                }
        }
    console.log(differentHobbies);
}