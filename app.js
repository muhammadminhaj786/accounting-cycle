// console.log('minhaj')
var fields = document.querySelector('.fields');
//creating a add debit entry function

function addDebitEntry(){
    var debitdiv = `                <div class="debit-fields mx-auto w-75 mt-3">
    <input type="text" placeholder="Info of Debit account">
    <input type="text" placeholder="Amount of Debit account">
    <input type="text" placeholder="Type of Debit account">

</div>`
fields.innerHTML += debitdiv
}
function addCreditEntry(){
    var creditdiv = `                  <div class="credit-fields mx-auto w-75 mt-3">
    <input type="text" placeholder="Info of Credit account">
    <input type="text" placeholder="Amount of Credit account">
    <input type="text" placeholder="Type of Credit account">

</div>`
fields.innerHTML += creditdiv
}