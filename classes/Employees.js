class Employees {
    #salary;
    #isHired = true
    constructor(name,title,salary,){
        this.name = name;
        this.title = title
        this.#salary = salary;
    }
    getSalary(){
        return `${this.#salary}`
    }
    setSalary(amount){
        this.#salary = amount
    }
    getStatus(){
        return `${this.#isHired}`
    }
    setStatus(command){
        if(command === "hire"){
            this.#isHired = true;
        }
        else{
            this.#isHired = false;
        }
    }
    
}

module.exports = {
    Employees
}