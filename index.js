const countEl= document.getElementById('count-el');
const saveEl= document.getElementById('save-el')
const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');
let count = 0;

incrementBtn.addEventListener('click', function(){
   
    countEl.textContent =  count ++
})

saveBtn.addEventListener('click', function(){
    let countStr = count +' - '
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

} )