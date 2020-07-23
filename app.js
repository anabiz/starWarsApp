
document.addEventListener('DOMContentLoaded', ()=>{
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {console.log(data.results[7]);loadHTMLTable(data);});
    console.log('loadeddd');
    //loadHTMLTable([]);
});



let loadHTMLTable = (data)=>{
    const characters= document.querySelector('#list');
    let data1 = data.results;

    if(!data){
        characters.innerHTML="<div id='nodatadiv'><h2 id='nodata'>Unable to get Data</h2></div>";
        return 0;
    }else{
        console.log(data1)
    }

    let tableHtml = "";
    data1.forEach(function(Name){
        tableHtml += "<div class='char'>";
        tableHtml += `<img class='imag' src="images/checkMark.png" >`;
        tableHtml += `<h3>${Name.name}</h3>`;
        tableHtml +=  "</div>";

        /*
        tableHtml += `<td>${new Date(date).toLocaleString()}</td>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Delete></td>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${id}>Edit></td>`;
        tableHtml +="</tr>";

        */

    });
    characters.innerHTML = tableHtml;

}
