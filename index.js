// 1. Write a function that takes 2 numbers and returns -1 if the first is less than the second; 1 – if the first
// more than the second; and 0 – if the numbers are equal.
function isGreater(num1, num2){
    if(num1 > num2){
        return 1;
    }
    else if(num1 === num2){
        return 0;
    }
    else{
        return -1;
    }
}


// 2. Write a function that calculates the factorial of the number passed to it.
function factorial(num){
    if(typeof(num).toString() == "number"){
        num = Math.round(num);
        let sum = 0;
        for(let i = 1; i < num; i++){
            sum += i;
        }
        return sum;
    }
    else{
        alert("Input must be integer!!!");
        return 0;
    }
}



// 3. Write a function that takes three separate
// numbers and turns them into one number. For example: numbers
// 1, 4, 9 will turn into the number 149.
function turnTo3DigitNumber(num1,num2,num3){
    if(typeof(num1).toString() == "number" && typeof(num2).toString() == "number" && typeof(num3).toString() == "number")
    {
        if(num1 === Math.abs(num1) && num2 === Math.abs(num2) && num3 === Math.abs(num3)){
            let res = 100 * num1 + 10 * num2 + num3;
            console.log(res);
        }
        else{
            alert("Inputs must be integer!!!");
        }
    }
    else{
        alert("Inputs must be number!!!");
    }
}



// 4. Write a function that takes length and width
// rectangle and calculates its area. If in the function
// passed 1 parameter, then it calculates the area of the square.
function calculateArea(len, width) {
    if (width === undefined) {
        return len * len; 
    } else {
        return len * width; 
    }
}




// 5. Write a function that checks whether the number passed to it is perfect. A perfect number is
// a number equal to the sum of all its own divisors.
function isPerfectNumber(num) {
    if (num <= 1) {
        return false;
    }

    let sum = 1;
    for (let i=2; i*i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i * i !== num) {
                sum += num / i;
            }
        }
    }
    return sum === num;
}



// 6. Write a function that takes the minimum and
// maximum value for the range, and only outputs
// those numbers from the range that are perfect.
// Use the function you wrote earlier to find out
// perfect number or not.
function perfectNumbersInRange(minVal, maxVal){
    for(let i=minVal; i<maxVal; i++){
        if(isPerfectNumber(i)){
            console.log(i);
        }
    }
}




// 7. Write a function that takes the time (hours, minutes, seconds) and displays it on the screen in the format “hh:mm:ss”.
// If the minutes and/or seconds were not present when calling the function
// transmitted, then output them as 00.
function displayTime(hours, minutes = "00", seconds = "00") {
    let formattedHour = String(hours).padStart(2, '0');
    let formattedMinute = String(minutes).padStart(2, '0');
    let formattedSecond = String(seconds).padStart(2, '0');
    return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
}




// 8. Write a function that takes hours, minutes and
// seconds and returns that time in seconds.
function converToSeconds(hours, minutes, seconds) {
    return (hours*3600) + (minutes*60) + seconds;
}




// 9. Write a function that takes the number of seconds,
// converts them to hours, minutes and seconds and returns them to
// as the string "hh:mm:ss".
function convertToTime(seconds) {

    const hours = Math.floor(seconds/3600);
    const minutes = Math.floor((seconds%3600) / 60);
    const second = seconds%60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSecond = String(second).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSecond}`;
}







// 10. Write a function that calculates the difference between dates.
// The function takes 6 parameters that describe 2
// dates, and returns the result as the string “hh:mm:ss”. At
// to complete the task, use the functions from the previous 2 tasks: first convert both dates to seconds,
// find out the difference in seconds, and then convert the difference
// back to "hh:mm:ss".
function compareTime(hours, minutes = "00", seconds = "00", hours2, minutes2 = "00", seconds2 = "00") {
    const time1 = converToSeconds(hours, minutes, seconds);
    const time2 = converToSeconds(hours2, minutes2, seconds2);
    const diference = time1 - time2;
    return convertToTime(diference);
}






// 11.Create an array "Shopping list". Each element of the array
// is an object that contains the product name, quantity required and purchased or not. Write several functions to work with such an array.
let shoppingList = [
    { productName: "Apples", quantity: 7, purchased: true },
    { productName: "Cheese", quantity: 3, purchased: false },
    { productName: "Bread", quantity: 1, purchased: true },
    { productName: "Water", quantity: 1, purchased: false }
];
        // 1) Display the entire list on the screen in such a way that first
        // There were unpurchased products, and then purchased ones.
        function displayProducts(products){
            let sortedList = [];
            for (const product of products) {
                if(product.purchased === true){
                    sortedList.push(product);
                }
                else{
                    sortedList.unshift(product);
                }
            }
            sortedList.forEach((p) => {
                console.log(`Product: ${p.productName}, Quantity: ${p.quantity}, Purchased: ${p.purchased}`);
            })
        }
        //displayProducts(shoppingList);

        // 2) Adding a purchase to the list. Please note that when adding
        // purchases with a product already existing in the list, it is necessary to increase the quantity in the existing purchase,
        // rather than adding a new one.
        function addPurchase(productName, quantity, shoppingList) {
            const existingProductIndex = shoppingList.findIndex(p => p.productName === productName);
        
            if (existingProductIndex !== -1) {
                shoppingList[existingProductIndex].quantity += quantity;
            } 
            else {
                shoppingList.push({ productName, quantity, purchased: false });
            }
        }
        // addPurchase("Apples", 3, shoppingList);
        // addPurchase("Pears", 2, shoppingList);
        // displayProducts(shoppingList);


        // 3) Purchasing a product. The function takes the product name and marks it as purchased.
        function purchaseProduct(productName, shoppingList) {
            const product = shoppingList.find((p) => {
                return p.productName === productName;
            });
        
            if (product) {
                product.purchased = true;
            } 
            else {
                console.log(`Product not found.`);
            }
        }
        
        // purchaseProduct("Cheese", shoppingList);
        // displayProducts(shoppingList);




// 12.Create an array describing a receipt in a store. Each element of the array consists of the product name, quantity and price for
// unit of goods. Write the following functions.
let receipt = [
    { productName: "Apples", quantity: 7, price: 12.95 },
    { productName: "Cheese", quantity: 3, price: 46 },
    { productName: "Bread", quantity: 1, price: 1.50 },
    { productName: "Water", quantity: 1, price: 0.60 }
];

        // 1) Print out the receipt on the screen.
        function displayReceipt(receipt){
            receipt.forEach((p)=>{
                console.log(`Product: ${p.productName}, Quantity: ${p.quantity}, Price: ${p.price}`);
            });
        }
        //displayReceipt(receipt);
            
            
        // 2) Calculation of the total purchase amount.
        function totalPurchaseAmount(receipt){
            let totalAmount = 0;
            receipt.forEach((item)=>{
                totalAmount += item.price * item.quantity;
            });
            totalAmount = Math.fround(totalAmount);
            return totalAmount;
        }
        //console.log(totalPurchaseAmount(receipt));



        // 3) Receiving the most expensive purchase in the receipt.
        function mostExpensivePurchase(receipt){
            let expensiveProductPrice = 0;
            let expensiveProduct;
            receipt.forEach((item) => {
                if(expensiveProductPrice <= item.quantity * item.price){
                    expensiveProductPrice = item.quantity * item.price
                    expensiveProduct = item;
                }
            })
            return expensiveProduct;
        }
        //console.log(mostExpensivePurchase(receipt));



        // 4) Calculation of the average cost of one product in a receipt.
        function averageCost(receipt){
            let totalAmount = 0;
            let productCount = 0;
            receipt.forEach((item)=>{
                totalAmount += item.price * item.quantity;
                productCount += item.quantity;
            });
            totalAmount = Math.fround(totalAmount);
            let average = totalAmount / productCount;
            return average.toFixed(2);
        }
        //console.log(averageCost(receipt));



// 13.Create an array of academy audiences. The audience object consists of a name, number of seats (from 10 to 20) andthe name of the faculty for which it is intended.
const audiences = [
    { name: "A", numberOfSeat: 18, faculty: "Computer Science"},
    { name: "E", numberOfSeat: 16, faculty: "Law"},
    { name: "F", numberOfSeat: 20, faculty: "Chemical Engineering"},
    { name: "B", numberOfSeat: 11, faculty: "Biology"},
    { name: "E", numberOfSeat: 15, faculty: "Information Technology"},
];

    // Write several functions to work with it.
    // 1) Display all audiences.
    function displayAudiences(audiences){
        audiences.forEach((audience) =>{
            console.log(`Name: ${audience.name}, Number Of Seat Count: ${audience.numberOfSeat}, Faculty: ${audience.faculty}`)
        });
    };
    //displayAudiences(audiences);




    // 2) Display the audiences for the specified faculty.
    function displayAudiencesSpecified(audiences, facultyName){
        audiences.forEach((audience) =>{
            if(audience.faculty === facultyName){
                console.log(`Name: ${audience.name}, Number Of Seat Count: ${audience.numberOfSeat}, Faculty: ${audience.faculty}`)
            }
        });
    };
    //displayAudiencesSpecified(audiences, "Law");


    // 4) Function of sorting audiences by number of seats.
    function sortAudiencesBySeats(audiences){
        audiences.sort((a, b) => a.numberOfSeat - b.numberOfSeat);
        return audiences;
    }
    //displayAudiences(sortAudiencesBySeats(audiences));


    // 5) Function of sorting audiences by name (alphabetically)
    function sortAudiencesByName(audiences){
        audiences.sort((a, b) => a.name.localeCompare(b.name));
        return audiences;
    }
    //displayAudiences(sortAudiencesByName(audiences));

