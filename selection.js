let arr =[1,5,8,15,30,90.50,60,32]

for(let i = 0; i < arr.length; i++)
{
    for(let j = i + 1; j < arr.length; j++)
    {
        if(arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr);