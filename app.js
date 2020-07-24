
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

        tableHtml += `<div class='imagName'>`;
        tableHtml += `<img class='imag' src="images/dummy.png" >`;
        tableHtml += `<h3 class='name'>${Name.name}</h3>`;
        tableHtml += `</div>`;

        tableHtml += `<div class='genderHeight'>`;
        tableHtml += `<p>`;
        tableHtml += `</p>`;
        tableHtml += `<p>`;
        tableHtml += `</p>`;
        tableHtml += `</div>`;

        tableHtml +=  "</div>";

    });
    characters.innerHTML = tableHtml;
}



document.querySelector('.name').addEventListener('click', function(event){
    console.log(event.target);
    if(event.target.className ==="delete-row-btn"){
        deleteRowById(event.target.dataset.id);
    }
    if(event.target.class === "edit-row-btn"){
        editRowById(event.target.dataset.id)
    }
});
