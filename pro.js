var luckycontext=new Promise((res,rej)=>{
    let yournum=6
    let lotnum=parseInt(Math.random()*10)
    if (yournum==lotnum){
        res("you win")
    }
})
luckycontext.then(res=>console.log('will buy a car'))