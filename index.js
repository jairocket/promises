const delay = (time)=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('timeout');
        resolve();
    }, time);
})

const minhaPromise = delay(1000).then(()=> console.log('depois do timeout'))

//console.log(minhaPromise);



let array = [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000];
array.forEach(async item=>{
    await delay(item);
    console.log(item)
});


