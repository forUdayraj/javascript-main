async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log(ans);
}
abcd();
//async await is remove .then and .catch and use await
//async await and .then use with mongodb
