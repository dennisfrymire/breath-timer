function sockMerchant(n, arr) {

    let pairs=0;
    let count=0;
        for(let i=0;i<arr.length;i++) {
    count=1;
        for(var j=i+1;j<arr.length;j++) {
        if(arr[i]==arr[j]) {
    count++;
            }
        }
    if (count % 2 == 0)
    {
    pairs++;
        }
    }
    return pairs;
    }

    console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]))