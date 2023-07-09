// console.log('minhaj')
//working on index page
var fields = document.querySelector('.fields');
//creating a add debit entry function

function addDebitEntry(){
    var debitdiv = `                <div class="debit-fields mx-auto w-75 mt-3">
    <input type="text" id="debit-info" placeholder="Info of Debit account">
    <input type="text" id="debit-amount" placeholder="Amount of Debit account">
    <label for="type">Choose a Type:</label>
    <select name="type" id="type">
        <option value="volvo">Assets</option>
        <option value="saab">Liability</option>
        <option value="mercedes">Owner Equity</option>
        <option value="audi">Revenue</option>
        <option value="audi">Expense</option>
        <option value="audi">Widtdraw</option>                    
    </select>

</div>`
fields.innerHTML += debitdiv
}
function addCreditEntry(){
    var creditdiv = `                  <div class="credit-fields mx-auto w-75 mt-3">
    <input type="text" id="credit-info" placeholder="Info of Credit account">
    <input type="text" id="credit-amount" placeholder="Amount of Credit account">
    <label for="type">Choose a Type:</label>
    <select name="type" id="type">
        <option value="volvo">Assets</option>
        <option value="saab">Liability</option>
        <option value="mercedes">Owner Equity</option>
        <option value="audi">Revenue</option>
        <option value="audi">Expense</option>
        <option value="audi">Widtdraw</option>                    
    </select>

</div>`
fields.innerHTML += creditdiv
}

function record(){
    var Dinfo = document.getElementById('debit-info').value;
    var Cinfo = document.getElementById('credit-info').value;
    var Damount = document.getElementById('debit-amount').value;
    var Camount = document.getElementById('credit-amount').value;
    var Dtype = document.getElementById('typeA').value
    var Ctype = document.getElementById('typeB').value

//     //creating a debit object
//     var dObj = {
//         Dinfo,
//         Damount,
//         Dtype
//     }
//     var getDObj = JSON.parse(localStorage.getItem('debit'))
//     if (getDObj === null){
//         var arr = []
//         arr.push(dObj)
//         localStorage.setItem('debit',JSON.stringify(arr))
//         // console.log(arr)
//     }else{
//         getDObj.push(dObj)
//         localStorage.setItem('debit',JSON.stringify(getDObj))
//     }

//     //creating a credit object
//     var CObj = {
//         Cinfo,
//         Camount,
//         Ctype
//         }
//     var getCObj = JSON.parse(localStorage.getItem('credit'))
//     if (getCObj === null){
//         var arr = []
//         arr.push(dObj)
//         localStorage.setItem('credit',JSON.stringify(arr))
//         // console.log(arr)
//     }else{
//         getCObj.push(dObj)
//         localStorage.setItem('credit',JSON.stringify(getCObj))
//     }

    var Obj = {
        Dinfo,
        Damount,
        Dtype,
        Cinfo,
        Camount,
        Ctype
    }
    var getObj = JSON.parse(localStorage.getItem('accounts'))
    if (getObj === null){
        var arr = []
        arr.push(Obj)
        localStorage.setItem('accounts',JSON.stringify(arr))
        // console.log(arr)
    }else{
        getObj.push(Obj)
        localStorage.setItem('accounts',JSON.stringify(getObj))
    }


}

//working on generalEntries page
var tbody = document.querySelector('.tbody');

//create event listner
window.addEventListener('load',function(){
    var getObj = JSON.parse(this.localStorage.getItem('accounts'))
    for (const i of getObj) {
        var id = 1;
        var tableBody = `             <tr>
        <th scope="row">${id++}</th>
        <td>${i.Dinfo}</td>
        <td>${i.Damount}</td>
        <td>${"-"}</td>
        </tr>
        <tr>
        <th scope="row">${id++}</th>
          <td>${i.Cinfo}</td>
          <td>${"-"}</td>
          <td>${i.Camount}</td>
        </tr>
        `
        tbody.innerHTML += tableBody
    
    }

})

//working on trail balance page
window.addEventListener('load',function(){
    var trailbody = document.querySelector('.trialbody');
    var getObj = JSON.parse(this.localStorage.getItem('accounts'));
    var id = 1;
    for (const i of getObj) {
        console.log(i.Camount)
        var trailDiv = `
        <tr>
        <td>${i.Dinfo}</td>
        <td>${i.Damount}</td>
        <td>${i.Camount}</td>
        </tr>`
        trailbody.innerHTML += trailDiv
    }
})
