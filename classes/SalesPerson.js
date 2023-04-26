const { Employees } = require('./Employees');
class SalesPerson extends Employees {
    #totalSales = 0

    constructor(clients){
        this.clients = [clients]
    }
    getSalesNumbers(){
        return this.#totalSales;
    }
    makeSale(amount){
        this.#totalSales += amount
    }



    
}

module.exports = {
    SalesPerson,
}