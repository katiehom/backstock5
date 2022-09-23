// // param {HTML Table Element} table The table to sort
// // param {number} column The index of the column to sort
// // param {boolean} asc Determines if the sorting will be ascending
// function sortTableByColumn(table, column, asc = true) {
//     const dirModifier = asc ? 1 : -1
//     const tBody = table.tBodies[0]
//     // const date = Array.from(tBody.querySelectorAll('.expiration'))
//     const rows = Array.from(tBody.querySelectorAll('tr'))

//     // Sort each row
//     const sortedRows = rows.sort((a, b) => {
//         const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim()
//         const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim()
//         if ((aColText == null || bColText == null) && dirModifier == 'desc'){
//             aColText = 'a'
//         } else if ((aColText == null || bColText == null) && dirModifier == 'asc'){
//             aColText = 'zzzzzzzzzzzzzzzzzzzzzz'
//         }
//         if ((aColText.includes('/') && aColText.includes('20')) && (bColText.includes('/') && bColText.includes('20'))) {
//             return new Date(aColText).getTime() > new Date(bColText).getTime() ? (1 * dirModifier) : (-1 * dirModifier)
//         }
//         });

//     // Remove all existing TRs from the table
//     while(tBody.firstChild) {
//         tBody.removeChild(tBody.firstChild)
//     }

//     // Add newly sorted rows
//     tBody.append(...sortedRows)

//     // Remember current column sorting direction
//     table.querySelectorAll('.sortDate').forEach(th => th.classList.remove('th-sortDate-asc', 'th-sortDate-desc'))
//     table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle('th-sortDate-asc', asc)
//     table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle('th-sortDate-desc', !asc)

// }

// sortTableByColumn(document.querySelector('table'), 1)

// // document.querySelector('#myTable th.sortDate').forEach(e => e.addEventListener('click', () => {
// document.querySelectorAll('.table-sortable th.sortDate').forEach(headerCell => {
//     headerCell.addEventListener('click', () => {
//     // document.querySelector('.expiration-head').addEventListener('click', () => {
//         const tableElement = e.parentElement.parentElement.parentElement
//         const headerIndex = Array.prototype.indexOf.call(e.parentElement.children, headerCell)
//         const currentIsAscending = headerCell.classList.contains('th-sortDate-asc')

//         sortTableByColumn(tableElement, headerIndex, !currentIsAscending)
//     })
// })
// // })







// // document.getElementById('expiration-head').addEventListener('click', sortByDate)


// // function sortByDate(a, b) {
// //     a = new Date(a).getTime()
// //     b = new Date(b).getTime()

// //     const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim()
// //     const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim()

// //     if (a < b) return -1
// //     if (a > b) return 1
// //     return 0
// // }    // const date = Array.from(tBody.querySelectorAll('.expiration'))

// // if ((aColText == null || bColText == null) && dirModifier == 'desc'){
// //     aColText = 'a'
// // } else if ((aColText == null || bColText == null) && dirModifier == 'asc'){
// //     aColText = 'zzzzzzzzzzzzzzzzzzzzzz'
// // }
// // if (aColText.includes('/') && bColText.includes('/')) {
// //     return new Date(aColText).getTime() > new Date(bColText).getTime() ? (1 * dirModifier) : (-1 * dirModifier)
// // }
// // 
// document.querySelector('.table-sortable td.expiration').addEventListener('click', sortByDate)

// function sortByDate() {
//     // const dirModifier = asc ? 1 : -1
//     // const tbody = document.querySelector("#myTable tbody")
//     // // get trs as array for ease of use
//     // const rows = [].slice.call(tbody.querySelectorAll("tr"))

//     // rows.sort(function(a,b) {
//     //     return new Date(a).getTime() > new Date(b).getTime() ? (1 * dirModifier) : (-1 * dirModifier)
//     // })

//     // rows.forEach(function(v) {
//     //     tbody.appendChild(v)
//     // })
//     console.log('clicked')
// }

// // document.querySelector('.expirationSort').addEventListener('click', datesSorter)
// // function datesSorter(a, b) {
// //     if (new Date(a) < new Date(b)) return -1
// //     if (new Date(a) > new Date(b)) return 1
// //     return 0
// // }