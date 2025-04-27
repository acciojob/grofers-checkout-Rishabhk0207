const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let table = document.querySelector('.table');



const getSum = () => {
    let allPrice = document.querySelectorAll('.price');
    let sum = 0;
    for(let key of allPrice){
        sum += Number(key.textContent);
    };
    let row = document.createElement('tr');
     row.id = 'ans';
    let col = document.createElement('td');
    col.textContent = "Total Price";
    row.appendChild(col);
    
    col = document.createElement('td');
    col.textContent = sum;
    row.appendChild(col);
    
    table.appendChild(row);

};

getSumBtn.addEventListener("click", getSum);

getSumBtn.addEventListener('click',()=>{
    getSumBtn.disabled=true;
})
