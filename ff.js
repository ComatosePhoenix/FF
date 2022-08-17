// Fighting fantasy

//the main issue with random rolling in Fighting fantasy is that there is only one stat that really matters, 
//skill, compared to the 6 stats of D&D where the actual stat didn't mean much but qualified you to certain paths. 
/*
* lets just go with the original and tweak the bits that don't work
* 
*/

//should I randomize them in the constructor? 
//no it should be done in a builder if at all. 
//every entity has these 2 stats at minimum. 
class ffentity{
    skill;
    body;
    constructor(s, b){
        skill = s;
        body = b;  
    }

    getCombatSkill(){
        return this.skill;
    }
}


//each weapon has at least 1 relevant special skill, 
//and a damage table. the damage table is an array of 7 values 
class weapon{
    skills;
    damage;
    constructor(s, b){}
    
     getSkills(){
        return skills;
    }
}

/*
a pc is really just a pile of variables. 
does it even make sense to use a class to handle these? 
I guess it provides a data structure. which gives the ability to save the data 
in a json object; 
talents are like skills in that they cost skill points to purchase, but cannot be leveled up. 
they do the thing, and thats it. 

*/
class ffpc extends ffentity{
    skills = [];
    talent;
    skill;
    luck;
    inventory;
    weapon;
    constructor (s,b, l){
        skill = s; 
        body = b; 
        luck = l;
    }

    getSpecialSkill(skillname){
       retVal =  Array.from(skills).find(skill=>{skill.name == skillname})
       return retVal;
    }

    getCombatSkill(){
        retVal = this.skill;
        this.weapon.getSkills().forEach(skill=>{
            let spec = this.getSpecialSkill(skill)
            if(spec> retVal){
                retVal = spec;
            } 

        })
        return retVal;
    }
}

//this isn't even what I want to do. 
class entitybuilder{
    constructor(){
        
    }

    BuildGenericEntity(){
        return new ffentity(7,14)
    }
    RollPC(){
        

        return new ffpc()
    }
}

//todo crits fumbles, actual logic, rough draft. 
function opposedRoll(entity, entity2){
    let first = entity.getCombatSkill()+ roll(2);
    let second = entity2.getCombatSkill()+ roll(2);
    
    return entity
}

function roll(int){
    retval=0;
    for(i=0;i<int; i++){
        retval+=d(6)
    }
    return retval;
}

//dice roll
function d(int){
    return Math.floor(Math.random()*int)+1;
}

