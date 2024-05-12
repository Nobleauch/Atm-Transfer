let myCardDetails = {
    name: "Amadi Uchenna",
    Bank: "First Bank",
    accountNumber: "3094546000",
    balance: 150000,
    pin: 1234
};
let bankB = {
    bank: "Access Bank",
    name: "Vanessa Uchenna",
    balance: 1000,
    accountNumber: 1234567890,
}
/* let isAtmInserted = yes; //

function verifyinserted() {
    let isinserted = prompt("is your ATM Inserted?:");
    if (isinserted === null) return; isinserted = parseInt(enteredPin);

    if (isinserted !== isAtmInserted) {
        let retry = confirm("No card Inserted. Do you want to try again?");
        if (!retry) return;
        verifyinserted();
    }
    else {
        alert("card insrted Successfully!");
    }
}
verifyinserted()
 */
let pin = 1234; //the correct pin

function verifyPin() {
    let enteredPin = prompt("Enter your ATM Pin:");
    if (enteredPin === null) return; enteredPin = parseInt(enteredPin);
    if (isNaN(enteredPin) || enteredPin.toString().length !== 4) {
        alert("Invalid Pin. Please Try Again");
        return;
    }
    if (enteredPin !== pin) {
        let retry = confirm("Incorrect Pin. Do you want to try again?");
        if (!retry) return;
        verifyPin();
    }
    else {
        alert("Pin Verified Successfully!");
    }
}
verifyPin()

function startTransfer() {
    alert("Welcome to ATM Transfer");
    transferMoney();
}
function transferMoney() {
    let receiverAccountNumber = prompt("Enter receiver account Number");
    if (receiverAccountNumber === null) return;
    let amount = prompt("Enter the amount to transfer:");
    if (amount === null) return;
    amount = parseFloat(amount);
    if (isNaN(amount) || amount <= 0) { alert("Invalid amount. Please try again."); return }
    if (amount > myCardDetails.balance) { alert("insufficient funds in" + myCardDetails.name + "."); return; }

    let confirmTransfer = confirm(`Transfer $${amount} from ${myCardDetails.name} to ${bankB.name}?`);
    if (confirmTransfer) {
        myCardDetails.balance -= amount;
        bankB.balance += amount;
        alert(`Transfer successful! New balances: ${myCardDetails.name} = $${myCardDetails.balance}, ${bankB.name} = $${bankB.balance}`);
    }
}

