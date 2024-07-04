function filtraPares(arr){
    nova_arr = []
    for(let i=0; i<arr.lenght; i++){
        if (arr[i] % 2 === 0){
            nova_arr.push([i])
        }
    }

    return nova_arr

}
arr = [1,2,3,4,5]
resultado = filtraPares(arr)
console.log(resultado)