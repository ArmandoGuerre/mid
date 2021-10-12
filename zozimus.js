const bard = {
    bardName:  "Zozimus",
    realName: "Micheal Moore",
    yearOfBirth: 1689,
    cost: {
        baseCost: 10.50,
        discount: .20
    },
    poem: {
        subjectAge: 21,
        subjectName: "Armando",
        subjectMessage: "Happy Birthday Armando!"
    },
    verse: function(){
        let inText= `Come ye to herald ${this.poem.subjectName} well, as we ring the chorus bell`;
        return inText;
    },
    refrain: function(){
        if(this.poem.subjectAge > 25){
            return(`Young ${this.poem.subjectName} on your year ${this.poem.subjectAge}, ${this.poem.subjectName}, ${this.poem.subjectName},${this.poem.subjectName}, ${this.poem.subjectName}`)
        }
        else{
            return(`Honorable ${this.poem.subjectName} on your year ${this.poem.subjectAge}, ${this.poem.subjectName}, ${this.poem.subjectName},${this.poem.subjectName}`)}
    },
    /*writePoem: function(){
        let refainEle = document.querySelector(".refrain");
        let verseEle = document.querySelector(".verse");
        let greetEle = document.querySelector(".greet");
        refainEle.innerHTML = bard.refrain();
        verseEle.innerHTML = bard.verse();
        greetEle.innerHTML = bard.poem.message;
    }*/
}
let refainEle = document.querySelector(".refrain");
let verseEle = document.querySelector(".verse");
let greetEle = document.querySelector(".greet");
refainEle.innerHTML = bard.refrain();
verseEle.innerHTML = bard.verse();
greetEle.innerHTML = bard.poem.subjectMessage;

const personalBard = () => {
    let name = prompt("What is your name?");
    let age = prompt("What is your age?");
    let message = prompt("What will be your message?");
}
const payTheBard = function(){
    let costEle = document.querySelector(".cost");
    let discount = bard.cost.baseCost * bard.cost.discount;
    console.log(discount);
    let newCost =  bard.cost.baseCost - discount;
    costEle.innerHTML = `Now Pay ${bard.bardName}, $${newCost} after discount`;
}    
str = personalBard()
str = payTheBard ()