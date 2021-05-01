// console output
        // console.log('Hello World');
        // console.error('this is an error');
        // console.warn('this is warning');

//  data type-let,const
        // let age=80;
        // age=89;
        // console.log(age);
        // const ag=80;
        // console.log(ag);

// stringst,numbers,boolen,null,undefined
        // const name='kavita';
        // const age=30;
        // const rating=4.5;
        // const iscool=true;
        // const x=null;
        // const y=undefined;
        // let z;  (const z will give an error as it is not defined)
        // console.log(typeof x);
// concatenation
        // const name='kavita';
        //  const age=30;
        //  console.log('my name is '+ name + ' and my age is '+ age);
// Template string
        // const hello=` my name is ${name} and my age is ${age}`;
        // console.log(hello);
// Strings
        // const s="Hello, worlsd, good";
        // console.log(s.length);
        // console.log(s.substring(0,6).toUpperCase());
        // console.log(s.toUpperCase());
        // console.log(s.toLowerCase());
        // console.log(s.split(', '));
// Arrays-variables that hold multiple values
        // const fruits=['apple','oranges',40,true];
        // fruits[4]='grapes';
        // fruits.push('google');
        // console.log(fruits.length);
        // fruits.unshift('you');
        // fruits.push('google');
        // fruits.pop();
        // console.log(fruits);
        // console.log(Array.isArray(fruits));
        // console.log(fruits.indexOf('google'));
// Object Literals
        // const person={
        //         firstName:'john',
        //         lastName:'Doe',
        //         age:30,
        //         hobbies:['music','movies','sports'],
        //         address:{
        //                 street:'50 main st',
        //                 city:'botom',
        //                 state:'MA',
        //         }
        // }
        // person.email='john@gmail.com';
        // console.log(person);
        // console.log(person.firstName);
        // console.log(person.address.city);
        // console.log(person.hobbies[0]);
        // console.log(person.email);


// feature of es6 for object literals->
        // const { firstName, lastName, address:{city}}=person;
        // console.log(firstName);
// Arrays of objects and JSON
                // const todos=[
                //         {
                //                 id:1,
                //                 text:'take out trash',
                //                 isCompleted:true
                //         },
                //         {
                //                 id:2,
                //                 text:'meeting with boss',
                //                 isCompleted:true
                //         },
                //         {
                //                 id:3,
                //                 text:'Dentist art',
                //                 isCompleted:true
                //         }
                // ];
                // console.log(todos[2]);
                // const todoJSON=JSON.stringify(todos);
                // console.log(todoJSON);
//  LOOPs
     // for loops
                // for(let i=0;i<=10;i++){
                //         console.log(`for loop no:${i}`);
                // }
    // while Loops
                // let i=0;
                // while(i<=10)
                // {
                //         console.log(`while loop no: ${i}`);
                //         i++;
                // }


                // for(let i=0;i<=todos.length;i++){
                //         console.log(todos[i].text);
                // console.log(todos[i].id);
                // }

        // OR
                // for(let elements of todos){
                //         console.log(elements.text);
                //         console.log(elements.id);
                // }


// forEach,map,filter
                // const todos=[
                //         {
                //                 id:1,
                //                 text:'take out trash',
                //                 isCompleted:true
                //         },
                //         {
                //                 id:2,
                //                 text:'meeting with boss',
                //                 isCompleted:true
                //         },
                //         {
                //                 id:3,
                //                 text:'Dentist art',
                //                 isCompleted:false
                //         }
                // ];
        // forEach
        //         todos.forEach(function(elements){
        //            console.log(elements.text);
        //         });
        // // map
        //         const todoText=todos.map(function(elements){
        //                 return elements.id;
        //         });
        //         console.log(todoText);
        // // filter
        //         const todoCompleted=todos.filter(function(elements){
        //                 return elements.isCompleted==false;
        //         });
        //         console.log(todoCompleted);
        // filter+map
                // const todoCompleted=todos.filter(function(elements){
                //         return elements.isCompleted==false;
                // }).map(function(elements){
                //         return elements.text;
                // })
                // console.log(todoCompleted);

// CONDITION
                // const x=4;
                // const y=10;
                // if(x===4 && y===10)
                // {
                //         console.log('x is greater than 4 and y is less than 8');
                // }else if(x<4){
                //         console.log('x is less than 4');
                // }else{
                //         console.log('heheheh')
                // }


                                // const x=10;
                                // const color = x>10? 'red':'blue';
                                // console.log(color);


                // switch(color){
                //         case 'red':
                //                 console.log('color is red');
                //                 break;
                //         case 'blue':
                //                 console.log('color is blue');
                //                 break;
                //         default:
                //                 console.log('color is nor red or blue');
                //                 break;
                //    }

// FUNCTIONS
                // function addNums(num1=1,num2=2){
                //         console.log(num1+num2);
                // }
                // addNums(5,5)

                // function addNums(num1=1,num2=2){
                //         return num1+num2;
                // }
                // console.log(addNums(6,5));

// const addNums = (num1=1, num2=2)=>{return num1+num2;}
// console.log(addNums(4,6));

// const addNums = (num1=1, num2=2)=>console.log(num1+num2);
// addNums(3,6);

// const addNums = (num1=1, num2=2)=> num1+num2;
// console.log(addNums(4,6));

                //  const todos=[
                //                         {
                //                                 id:1,
                //                                 text:'take out trash',
                //                                 isCompleted:true
                //                         },
                //                         {
                //                                 id:2,
                //                                 text:'meeting with boss',
                //                                 isCompleted:true
                //                         },
                //                         {
                //                                 id:3,
                //                                 text:'Dentist art',
                //                                 isCompleted:false
                //                         }
                //                 ];
                // todos.forEach((element)=>console.log(element.text));

// CONSTRUCTOR Function

// function person(firstName,lastName,dob){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.dob=new Date(dob);
        // this.getBirthYear=function(){
        //         return this.dob.getFullYear();
        // }
        // this.getFullName=function(){
        //         return `${this.firstName} ${this.lastName}}`;
        // }
// }
//       this will show getBirthYear and getFullName in prototype only in console
                // person.prototype.getBirthYear=function(){
                //         return this.dob.getFullYear();
                // }
                // person.prototype.getFullName=function(){
                //         return `${this.firstName} ${this.lastName}}`;
// }
// Instantiate object on 
                // const person1=new person('john','doe','4-3-1900');
                // const person2=new person('mary','smith','4-3-1990');
                // // console.log(person2.dob.getFullYear());
                // console.log(person1.getBirthYear());
                // console.log(person1.getFullName());



// ES6-It just a better version of constructor function mentioned above 
                        // class person{
                        //         constructor(firstName,lastName,dob){
                        //                 this.firstName=firstName;
                        //                 this.lastName=lastName;
                        //                 this.dob=new Date(dob);    
                        //         }
                        //         getBirthYear(){
                        //                 return this.dob.getFullYear();    
                        //         }
                        //         getFullName(){
                        //                 return `${this.firstName} ${this.lastName}}`;     
                        //         }

                        // }
                        //       const person1=new person('john','doe','4-3-1900');
                        //       const person2=new person('mary','smith','4-3-1990');
                        //         console.log(person1.getBirthYear());
                        //         console.log(person1.getFullName());

// WINDOWS OBJECTS AND DOM
                        // console.log(window);  ->>To see the windows documents or dom or feature that it uses
                        // window.alert('everything is gonna be fine one day'); ->> it also work pretty fine with window

// SINGLE ELEMENT
                        // console.log(document.getElementById('my-form'));
                        // console.log(document.querySelector('.msg')); ->>can select anything -id ,class ,h1 unlike getElementById


// MULTIPLE ELEMENT 
                        // console.log(document.querySelectorAll('.item')); ->>recommended to use only querySelectorAll to select multiple elements
                        // console.log(document.getElementsByClassName('item'));
                        // console.log(document.getElementsByTagNmae('li'));
                        // console.log(document.querySelectorAll('li'))

        // const items=document.querySelectorAll('.item');
        // console.log(items)
        // items.forEach((item) => console.log(item));

// DOM MANIPULATION
        // const ul=document.querySelector(".items");
        // // ul.remove();
        // // ul.lastElementChild.remove();
        // ul.firstElementChild.textContent='Hello';
        // ul.children[1].innerText='kavita';
        // ul.lastElementChild.innerHTML='<h3>Hii kavita</h3>';
        // const btn =document.querySelector('.btn');
        // btn.style.background='red';


// EVENTS
                // const btn =document.querySelector('.btn');
                // // btn.style.background='red';
                // btn.addEventListener('mouseover',(e)=> {
                //         e.preventDefault();
                //         console.log(e.target.className);
                //         document.querySelector('#my-form').style.background='#ccc';
                //         document.querySelector('body').classList.add('bg-dark');
                //         document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
                // });
       

// FORM SCRIPT
                        // const myForm=document.querySelector('#my-form');
                        // const nameInput=document.querySelector('#name');
                        // const emailInput=document.querySelector('#email');
                        // const msg=document.querySelector('.msg');
                        // const userList=document.querySelector('#users');
                        // myForm.addEventListener('submit',onSubmit);
                        // function onSubmit(e){
                        //         e.preventDefault();
                        //         console.log(nameInput.value);
                        //         if(nameInput.value==='' || emailInput.value===''){
                        //             msg.classList.add('error');
                        //              msg.innerHTML='please enter all the fields';
                        //                 // alert('please enter the fields');
                        //             setTimeout(()=> msg.remove(),3000);
                        //         } else{
                        //                 const li=document.createElement('li');
                        //                 li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
                        //                 userList.appendChild(li);
                        //                 // clear fields
                        //                 nameInput.value='';
                        //                 emailInput.value='';


                        //                 console.log('success');
                        //         }
                        // }
