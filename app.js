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

    //creating a debit object
    var dObj = {
        Dinfo,
        Damount,
        Dtype
    }
    localStorage.setItem("Dobj",JSON.stringify(dObj))
    console.log(dObj)

}

//working on generalEntries page
