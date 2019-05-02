const salesOutput = document.querySelector("#car--output");
salesOutput.innerHTML += "<h1>Weekly Sales Report</h1><hr>"



const allCars = salesByWeek.vehicle;
console.log(salesByWeek);

salesByWeek.forEach(sale => {
    console.log(sale.vehicle)
    console.log("Agent", sale.sales_agent)
    console.log(sale.gross_profit)

    const names = Object.values(sale.sales_agent)
    salesOutput.innerHTML += `<h3>${names[1]} ${names[2]}</h3>`
    console.log(names)


    for (const value of Object.entries(sale.vehicle)) {
        salesOutput.innerHTML += `<p>${value[0]}: ${value[1]}</p>`
    }

    salesOutput.innerHTML += `<h4>Profit: ${sale.gross_profit}</h4>`
    salesOutput.innerHTML += `<hr>`
})