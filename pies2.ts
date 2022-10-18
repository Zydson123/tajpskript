abstract class Zwierze{
    private name: string;
    private wiek: number;
    private waga: number;
    private glod: number;
    constructor(name: string, wiek: number, waga: number){
        this.name = name;
        this.wiek = wiek;
        this.waga = waga;
        this.glod=0;
    }
    get getGlod(){
        return this.glod;
    }
    setGlod(glod: number){
        this.glod = glod;
    }
    jedz(){
        this.glod=this.glod-10;
    }
    dzialaj(){
        this.glod=this.glod+5;
    }
}
class Ssak extends Zwierze{
    private zadowolenie: number;
    constructor(name,wiek,waga){
        super(name,wiek,waga)
        this.zadowolenie=0;
    }
    get getZadowolenie(){
        return this.zadowolenie;
    }
    zabawa(){
        this.zadowolenie=this.zadowolenie+10;
    }
}

const pies: Ssak = new Ssak("Hera", "3", "6");
pies.zabawa(); //zadowolenie = 10
console.log(pies.getZadowolenie);
pies.dzialaj(); //glod = 5
pies.dzialaj(); //glod = 10
console.log(pies.getGlod)
pies.jedz(); //glod = 0
console.log(pies.getGlod);
pies.setGlod(10); //glod = 10
console.log(pies.getGlod);
console.log(pies)