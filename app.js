async function firstsixincomplete(userid){

    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const results = await promise.json()

    const incompleted = results.filter(elem => !elem.completed).slice(0, 6);

    console.log(incompleted);

    
}
firstsixincomplete(6);