let employees = [
    { name: "john", Hourlyrate: 16.28, Hoursworked: 33  },
    { name: "Tim", Hourlyrate: 18.42, Hoursworked: 45},
    { name: "Josh", Hourlyrate: 17.72, Hoursworked: 22},                          
]

let grosspay = employees.Hoursworked*employees.Hourlyrate
function calculateBasePay (Hourlyrate,Hoursworked){
if (employees.Hoursworked < 40)
    return (grosspay)
else
    return ("Overtime")

} 

let overtimePay = employees.hoursworked*employees.Hourlyrate
function calculateOvertimePay (Hourlyrate,Hoursworked) {
    if (employees.Hoursworked > 40)
        return (overtimePay)

}

function Calculatetaxes (grosspay) {
    const tax = 0.15
    return (grosspay*0.15)
}
function processPayroll (employees){
let employees = 3

while (employees > 0) {
console.log(`${employees.name} x${grosspay*Calculatetaxes}x${overtimePay*Calculatetaxes}@ ${formatCurrency(unit)} = ${formatCurrency(line)}`);
    sub += line;

}

}