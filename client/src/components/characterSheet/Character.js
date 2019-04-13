module.exports= function Character(name){
    this.scripts={
        addClass:(value)=>{
            let newClass={
                name:value.name,
                level:value.level,
                experience:value.exp,
                hitDie:value.hitDie
            };
            let isThere=this.classes.class.filter(x=>x.name===value.name);
            (isThere.length===0)&&(()=>this.classes.class.push(
                newClass
            ))();
        },
        genStats:()=>{
            const statList=["str","dex","con","int","wis","cha"];
            function Stat(){
                // Default Minimum
                this.val=1;
                // Where to put any bonuses from items/leveling/race/etc
                this.bonuses=[];
                this.bonus=0;
            }
            statList.forEach((x)=>{
                this.stats[x]=new Stat;
            });
        },
        // Sets the stat and bonus for your character
        setStat:(target,value)=>{          
            this.stats[target].val=value;
            let statBonus=Math.floor((value-10)/2);
            // Generates the Stat bonus, if less than 0, it's 0
            this.stats[target].bonus=statBonus>=0?statBonus:0;
        }
    };
    this.name=name;
    this.classes={
        class:[],
        get Classes(){
            return this.class
        }
    };
    this.stats={
    };
    this.alignment="";
    this.details={
        age:0,
        height:"",
        weight:0,
        eyes:"",
        skin:"",
        hair:"",
        background:{},
        personality:{
            traits:"",
            ideals:"",
            bonds:"",
            flaws:""
        }
    }
    this.health={
        deathSaves:{
            success:0,
            failures:0
        },
        hp:{
            max:0,
            current:0,
            temporary:0
        },
        hitDie:""
    };
    this.magic={
        spells:[],
        spellSlots:[],
        spellcastingAbility:{},
        spellSaveDc:"",
        spellAttackBonus:0
    };
    this.feats={};
    this.skills={};
    this.proficiencies={
        proficiencyBonus:0
    };
    this.armorClass=0;
    this.initiative=0;
    this.speed=0;
    this.inventory={
        equipped:[],
        armor:[],
        weapons:[],
        other:[],
        currency:{
            total:{
                cp:0,
                sp:0,
                ep:0,
                gp:0,
                pp:0
            },
            conversion:{
                // conversion table for 
                cp:1,
                sp:10,
                ep:50,
                gp:100,
                pp:1000
            },
            holding:()=>{
                const {total,conversion}=this.inventory.currency;
                let converter=Object.keys(conversion);
                // insert converter that replaces total amounts with organized values, value by value apply everything
                // console.log(converter);
            },
            setCurrency:(tar,val)=>{
                const {total,holding,getCurrency}=this.inventory.currency;
                total[tar]=val;
                holding();
                getCurrency();
            },
            getCurrency:()=>{
                const {total}=this.inventory.currency;
                // console.log(total);
            }
        },
    };
    this.savingThrows=[];
    this.scripts.genStats();
};