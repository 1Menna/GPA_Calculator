let result = document.querySelector('.result');

let crsName = document.querySelector('.course');
let crdHours = document.querySelector('.hours');
let selectEle = document.querySelector('.grade');

let cntainer = document.querySelector('#container');

let sumHours=0;
let sumPrdcts=0;

const myMap = new Map();

myMap.set('A+', 4);
myMap.set('A', 3.7);
myMap.set('B+', 3.3);
myMap.set('B', 3);
myMap.set('C+', 2.7);
myMap.set('C', 2.4);
myMap.set('D+', 2.2);
myMap.set('D', 2);
myMap.set('F', 0);

function Add(){
    
    let cN = crsName.value;
    let cH = crdHours.value;
    let choice = selectEle.options[selectEle.selectedIndex].value;

    let row = document.createElement('li');

    let content =`
    <div class="C">${cN}</div>
    <div class="H">${cH}</div>
    <div class="G">${choice}</div>
    <span>&#xd7;</span>`

    
    row.innerHTML = content;

    cntainer.appendChild(row);
    /*__________________________________*/
    sumPrdcts+= myMap.get(choice) * cH;
    sumHours+=+cH;
    result.value=(sumPrdcts/sumHours).toFixed(2);
    /*__________________________________*/

    crsName.value='';
    crdHours.value='';
    selectEle.value="A+";

    /*__________________________________*/
    saveData();

} 

cntainer.addEventListener('click',function(e){
    if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove(); 
        
        let minushours = e.target.parentNode.querySelector('.H').innerHTML;
        let gra = e.target.parentNode.querySelector('.G').innerHTML;
        let minusgrade =myMap.get(gra);

    
        sumPrdcts-=(minushours*minusgrade);
        sumHours-=minushours;
        if(sumHours === 0){
            result.value='';
    
        }
        else{
            result.value=(sumPrdcts/sumHours).toFixed(2);
            saveData();
        }    
    }

})

function saveData(){
    localStorage.setItem("gpa",cntainer.innerHTML)
}
function showData(){
    cntainer.innerHTML = localStorage.getItem("gpa");
}
showData();