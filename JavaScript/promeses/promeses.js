let count = 0

function testPromise(){
    const promiseCount = ++count
    console.log("sync started")
    
    new Promise((resolver, reject) => {
            setTimeout(() => {
            if (promiseCount % 2 ===0){
                resolver(promiseCount)  
            } else {
                reject(promiseCount) 
            }
}, 1000)
    }).then((value) => {
        console.log(`async fim ${value}`)
    }).catch(() => {
        console.error("async erro")
    })

    console.log("sync finished")
}

const buttonEl = document.querySelector("button")
buttonEl.addEventListener("click", testPromise)