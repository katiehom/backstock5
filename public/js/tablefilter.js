// const expDateObj = document.querySelector('#floatingExpirationDate')

function searchTable() {
    let input, filter, found, table, tr, td, i, j;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}

const expDate = new Date (el.expirationDate)
format(expDate, 'MM/dd/yyyy')

// const date = new Date(expDateObj.value)
// let day = date.getDate()
// let month = date.getMonth() + 1
// let year = date.getFullYear()

// day < 10 && (day = `0${day}`)
// month < 10 && (month = `0${month}`)

// const newFormat = `${month}-${day}-${year}`

// expDateObj.value = newFormat
// console.log(newFormat)


// function isExpired(date) {
//     const today = new Date()

//     console.log(expDate.value)
// }

    // Need to add class for almost expired or expired to expiration date and description and add to edit page as well ??? 
    //     class='<%= el.expriationDate.toDateString() < today.toDateString() ? 'expired' : ''%>'
    //     <tr class='<%= el.quantity === 0 || el.quantity < el.idealQuantity ? 'restock' : ''%>'>  