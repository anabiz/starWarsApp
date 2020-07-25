
document.addEventListener('DOMContentLoaded', ()=>{
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        loadUsers(data);
    });

});
const characters= document.querySelector('#list');
characters.innerHTML="<div id='nodatadiv'><h2 id='nodata'>Fetching to get Data...</h2></div>";

let loadUsers = (data)=>{
    let results = data.results;
    let usersHtml = "";
    results.forEach(function(Name, id){

        usersHtml += "<div class='char'>";
        usersHtml += `<div class='imagName'>`;
        usersHtml += `<img class='imag' src="images/dummy.png" >`;
        usersHtml += `<div class='name' data-id='${id}'><h4 id='clickablename' data-id='${id}'>Name: ${Name.name}</h4></div>`;
        usersHtml += `</div>`;
        usersHtml +=  "</div>";
    });
    characters.innerHTML = usersHtml;
}

const instance = null;
class user {
    static getUserInstance(){
        return instance ? instance : new user();
    }
    async getUserProperty(singleUserDetails){

        try{
            const response = new Promise((resolve, reject)=>{   
                if(singleUserDetails){
                    resolve({Height:singleUserDetails.height, Gender:singleUserDetails.gender, Name:singleUserDetails.name});
                    
                } else{ 
                    reject(new Error(err.message));
                }
            });
            return response;

        }catch(error){
            console.log(error);
        }
    } 
    
}

document.querySelector('#list').addEventListener('click', function(event){
    
    if(event.target.id ==="clickablename"){
        console.log(event.target.parentNode)
        let id = +event.target.dataset.id + 1;
         
        fetch('https://swapi.dev/api/people/' + id)
        .then(response => response.json())
        .then(data => {

            const db =  user.getUserInstance();
            const result =  db.getUserProperty(data);
            result.then((user)=>{

                let tableHtml1 = "<div class='genderHeight'>";
                tableHtml1 += `<p id='height'>`;
                tableHtml1 += `Height: ${user.Height}`;
                tableHtml1 += `</p>`;
                tableHtml1 += `<p id='gender'>`;
                tableHtml1 += `Gender: ${user.Gender}`;
                tableHtml1 += `</p>`;
                tableHtml1 += `<p id='clickablename1'>`;
                tableHtml1 += `Name: ${user.Name}`;
                tableHtml1 += `</p>`;
                tableHtml1 += "</div>";

                event.target.parentNode.innerHTML = tableHtml1; 
            })
    
        });
        
    }

    let arr = document.getElementsByClassName("char");
    //arr.forEach((ar)=>{
        console.log(arr.innerHTML)
    //})


    if(event.target.id === "clickablename1"){
        let x = document.getElementById("height");
        let y = document.getElementById("gender");

        if (x.style.display === "none" && y.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block"
        } else {
            x.style.display = "none";
            y.style.display = "none";
        }
        
    }
    
});

