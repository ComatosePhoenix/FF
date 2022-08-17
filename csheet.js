//ENUMS
PHYSIQUE = 0
ENDURANCE = 1
AGILITY = 2
INTELLIGENCE = 3
CHARISMA = 4
FAITH = 5
BRAVERY = 6
SELFISHNESS = 7
GREED = 8
LUST = 9
SOCIAL = 10
//Zodiac. 
[
{name: 'none'},
{name: 'aries'},
{name: 'taurus'},
{name: 'gemini'},
{name: 'cancer'},
{name: 'leo'},
{name: 'virgo'},
{name: 'libra'},
{name: 'scorpio'},
{name: 'sagatarius'},
{name: 'capricorn'},
{name: 'aquarius'},
{name: 'pisces'},
{name: 'dummy'}
]
//zodiac sign modifies stat slightly 



class character{
    stats = [];
    adventure;
    magic;
    piety;
    zodiac;
    constructor(){
       for (i = 0; i<=10; i++){
           this.stats.push(stat());
       }
    }
    getStat(int){
        return stats[int];
    }
    setStat(stat, int){
        stats[stat]= int;
    }
    getLeadership(){
        return((this.getStat(CHARISMA)*3+this.getStat(INTELLIGENCE)+this.getStat(BRAVERY)+this.getStat(SOCIAL)*4)/10);
    }


}


//dice roll
function d(int){
    return Math.floor(Math.random()*int)+1;
}

function stat(){
    return d(6)+d(6)+d(6);
}

function generateChar(){
    //roll stats. 



}