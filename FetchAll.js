function fetchAllProducts(currentPage = 1) { //currentPage allows for pagination of the data.
    fetch('https://example.com/api/', { //Insert your API URL here.
        headers: {Authorization: 'insert token here'} //Insert your Authorization token here!
    })
        .then(resp => resp.json())
        .then(respData => {
            let display = respData;
            let insertparameters = []; //Put the parameters that get dumped from the API into here as let elements.
            let apiCounter = 0; //Replace the 0 with the amount of data you want per page.
            
            display.forEach((id) => { insertparameters.push(id.parameter); }); //Make sure to have each parameter pushed from the API to the let.
            
            let table_body = document.getElementById("insertTableName"); //The name of your table.
            let limitCount = (Number(currentPage) * apiCounter);
            
            for(i=(Number(limitCount) - apiCounter);i<=limitCount;i++){
                var row = `
                <span>` + insertparameters[i] + `</span>` //In here you can determine what to do with all your data in a PHP/HTML environment.
                table_body.innerHTML += row;
            }
        }
    )
}