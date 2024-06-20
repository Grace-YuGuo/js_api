const API_KEY = "Uh0gMz67NcPQhDeUQH3tWWRd568";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModel = new bootstrap.Modal(document.getElementById("resultsModal"));

// console.log(resultsModel);

document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));


async function postForm(e) {
    const form = new FormData(document.getElementById("checksform"));

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": API_KEY,
        },
        body: form,
    });

    const data= await response.json();

    // console.log(data);
    if (response.ok) {
        displayJshint(data);
    } else {
        throw new Error(data.error);
    }
    // console.log(form);

    // for (let e of form.entries()){
    //     console.log(e);
    // }

}

function displayJshint(data){
    let heading = `Your JSHint check result for ${data.file}is:`;

    if(data.error_num===0){
        let results= `<div class="no_errors">There is no error found in your code!</div>`;
    }else{
        results=`<div>Total Errors:<span class="error_count">${data.total_errors}</span></div>`;
        for(let er of data.error_list)
        {
            results+=`<div>At line<span class="line">${error.line}</span>,`
            results+=`column<span class="column">${error.col}</span></div>`;
            results+=`<div class="error">${error.error}</div>`;
        }
    }

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;

    resultsModel.show();

}


async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;
    const response = await fetch(queryString);
    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {

    let heading = "API Key Status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    resultModalBody = document.getElementById("results-content").innerHTML = results;

    resultsModel.show();

}