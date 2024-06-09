function generateGreetings(name){
    function spanish(){
        console.log('hola ${name}!');
    }
    function english(){
        console.log('hello ${name}!');
    }
    return{spanish ,english};
};
const name ='bala';
const greetings =generateGreetings(name);
console.log(typeof(greetings.spanish));//function
greetings.spanish();//hola bala!
greetings.english();//hello bala!