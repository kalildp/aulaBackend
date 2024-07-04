const express = require('express')

const app = express()

app.get('/teste-api', function (req, res) {
    res.send('NOSSA API TA FUNCIONANDO')
})

app.listen(8000)














function filtraPares(arr){
    nova_arr = []
    for(let i=0; i<arr.lenght; i++){
        if (arr[i] % 2 === 0){
            nova_arr.push([i])
        }
    }

    return nova_arr

}
