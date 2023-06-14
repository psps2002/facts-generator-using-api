fax = document.getElementById('fact');
answer = document.getElementById('answer');

const generatefact = async () => {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);
    showFact(data);

}

const showFact = (data) => {
    answer.innerHTML = `A Random Fact: <p> ${data.value} </p>`
}

fax.addEventListener('click', function(){
    generatefact();
})