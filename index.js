const receipt_address = `Max Musterman
Musterstraße 1
51342 Beispielhausen`

const transactions_table = document.getElementById('transactions')
const transaction_rows = Array.prototype.slice.call(transactions_table.rows, 1) // strip-of header row

const receipt_forms = transaction_rows.filter((row, index, rows) => { 
    if (index === 0) return false // first row cannot be form

    const row_before = rows[index - 1]
    if (row_before.cells.length < 3) return false // row before was much likely a form already

    const content = row_before.cells[1].innerText // content of middle cell

    return row.cells.length === 1 // form rows only have one cell, the form itself
        && content.includes('Quittung') // previous row must contain 'Quittung'
}).map(row => row.cells[0].getElementsByTagName('form')[0])

receipt_forms.forEach(form => {
    const textarea = form[1]
    textarea.value = receipt_address

    const download = document.createElement('a')
    download.style = 'display: none;'
    document.body.appendChild(download)

    sendForm(form).then(data => {
        const url = URL.createObjectURL(data.blob)
        
        download.href = url
        download.download = data.filename
        download.click()
        URL.revokeObjectURL(download)
    })
})

function sendForm(form) {
    const fd = new FormData(form)

    return fetch(form.action, {
        method: 'POST',
        body: fd
    }).then(res => {
        if (!res.ok) {
            throw new Error('Response errored. Status code: ' + res.status)
        }

        const filename = res.headers.get('content-disposition').match(/filename="(.+)"/)[1]

        return res.blob().then(blob => {
            return {
                filename,
                blob
            }
        })
    }).catch(err => {
        console.error('Could not send XHR request. Reason: ' + err.message)
    })
}
