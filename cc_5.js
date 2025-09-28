let employees = [
    { name: "john", Hourlyrate: 16.28, Hoursworked: 33  },
    { name: "Tim", Hourlyrate: 18.42, Hoursworked: 45},
    { name: "Josh", Hourlyrate: 17.72, Hoursworked: 22},                          
]

function calculateBasePay (Hourlyrate,Hoursworked){
let basePay = 0;
for (let basePay of employees) {
    basePay = (Hourlyrate*Hoursworked)

}
console.log (basePay)
}

