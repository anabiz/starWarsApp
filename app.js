
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
    data1.forEach(function(Name, id){
        tableHtml += "<div class='char'>";

        tableHtml += `<div class='imagName'>`;
        tableHtml += `<img class='imag' src="images/dummy.png" >`;
        tableHtml += `<h3 class='name' data-id='${id}'>${Name.name}</h3>`;
        tableHtml += `</div>`;

        tableHtml += `<div class='genderHeight'>`;
        tableHtml += `<p id='height'>`;
        tableHtml += `</p>`;
        tableHtml += `<p id='gender'>`;
        tableHtml += `</p>`;
        tableHtml += `</div>`;

        tableHtml +=  "</div>";

        console.log(id);
    });
    characters.innerHTML = tableHtml;
}

const instance = null;
class dbService {
    static getDbServiceInstance(){
        return instance ? instance : new dbService();
    }
    async getAllData(singleUserDetails){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                if(!singleUserDetails){
                    reject(new Error(err.message));
                } else{ 
                    resolve({Name:singleUserDetails.name, Gender:singleUserDetails.gender, Height:singleUserDetails.height});
                }
            });
           console.log(response.Name);
            return response;

        }catch(error){
            console.log(error);
        }
    } 
    
}

$(document).on('click', '.name', function () {
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {

   let $fd=$(this).attr('data-id');
   console.log($fd);
   console.log(data.results[$fd]);
   const db =  dbService.getDbServiceInstance();
    const result = db.getAllData(data.results[$fd]);
    console.log(result);

    document.getElementsByClassName('genderHeight')[$(this).attr('data-id')].innerHTML=`<p>${result.promiseValue.Height}</p>${result.Gender}<p></P>`;

});
   /*
   localStorage.setItem('mybutt', JSON.stringify($fd));
   window.location.href="profile.html";
   */
   

});
/*
 let showdetails = document.querySelectorAll('.name');
 if(showdetails){
     showdetails.addEventListener('onclick', ()=>{
         console.log( "yeessss");
     });
 }
document.querySelector('#list .char .name').addEventListener('click', function(event){
    console.log(event.target);
    if(event.target.className ==="delete-row-btn"){
        deleteRowById(event.target.dataset.id);
    }
    if(event.target.class === "edit-row-btn"){
        editRowById(event.target.dataset.id)
    }
});
*/
