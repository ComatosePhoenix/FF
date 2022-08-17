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
}


//each weapon has at least 1 relevant special skill, 
//and a damage table. the damage table is an array of 7 values 
class weapon{
    skills;
    damage;
    constructor(s, b);
    function getSkills(){
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
    constructor (s,b, l){
        skill = s; 
        body = b; 
        luck = l;
    }

    getSpecialSkill(skillname){
       retVal =  Array.from(skills).find(skill=>{skill.name == skillname})
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

function combat(entity, entity2){
    if (entity.getWeapon()){
        entity.getWeapon().
    }
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

