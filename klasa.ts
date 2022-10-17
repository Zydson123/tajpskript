abstract class Restaurant{
    static id: number = 0;
    id : number;
    readonly name: string;
    private pizzaInOrder: string[] = [];
    private maxPizzasInOven: number = 10;
    protected recipes: string[] = [];
    private _manager: string = "Jan";
 
    constructor(name: string){
        this.name = name;
        this.id = Restaurant.id++
    }
    get manager(){
        return this._manager;
    }
 
    set manager(manager){
        this._manager = manager;
    }
    order(pizza: string) {
        this.pizzaInOrder.push(pizza);
    }
    private isOvenFull(): boolean{
        return this.pizzaInOrder.length > this.maxPizzasInOven;
    }
    abstract bake()
}
 
class PolishRestaurant extends Restaurant{
    constructor(name, public openAtNight){
        super(name);
    }
    bake(){
        return "Pizza piecze się sposobem polskim"
    }
}
 
class AmericanRestaurant extends Restaurant{
    bake(){
        return "Pizza piecze się sposobem amerykańskim"
    }
}
 
const dagrasso: PolishRestaurant = new PolishRestaurant('Dagrasso',true);
dagrasso.order("hawajska");
console.log(dagrasso.name);
dagrasso.manager = "Ola";
console.log(dagrasso.manager);
 
const pizzahut: PolishRestaurant = new PolishRestaurant("PizzaHut",true);
const dominium: AmericanRestaurant = new AmericanRestaurant("Dominium");
const rome: PolishRestaurant = new PolishRestaurant("Rome",true);
 
console.log(dominium);
console.log(rome.id);
console.log(pizzahut.id);