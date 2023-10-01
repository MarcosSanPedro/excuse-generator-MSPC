let btn = document.querySelector('#banana');
let eWho = document.querySelector('#who');
let eHow = document.querySelector('#how');
let eResult = document.querySelector('#result')

const aWho = ['Donald Trump tried to kidnap me and', 'Mickel Jackson found me and', 'My grandpa throw me his crazy eye and']
const aHow = ['I was detained by a gnome who challenged me to a riddle duel','I received an ancient prophecy that I was the chosen one to save a magical kingdom','I received an acceptance letter to a secret magical school']
const aResult = ['Finally I used Java script to return from there','Finally my dragon bring me back',]

 

btn.addEventListener('click', function(){
  let random1 = Math.floor(Math.random()*aWho.length);
  let random2 = Math.floor(Math.random()*aHow.length);
  let random3 = Math.floor(Math.random()*aResult.length);
  
  eWho.innerText = aWho[random1];
  eHow.innerText = aHow[random2];
  eResult.innerText = aResult[random3];

})