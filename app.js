
document.addEventListener('DOMContentLoaded', ()=>{
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
        loadUsers(data);
    });

});
const characters= document.querySelector('#list');
characters.innerHTML="<div id='nodatadiv'><h2 id='nodata'>Fetching Data...</h2></div>";

let loadUsers = (data)=>{
    let results = data.results;
    let usersHtml = "";
    results.forEach(function(Name, id){

        usersHtml += `<div class='char'>
                        <div class='imagName'>
                        <img class='imag' src="images/teacher.jpg" >
                        <div class='name' data-id='${id}'><h4 id='clickablename' data-id='${id}'>${Name.name}</h4></div>
                        </div>
                        </div><hr>`
        
        
    });

    characters.innerHTML = usersHtml;
}

const instance = null;
class User {
    static getUserInstance(){
        return instance ? instance : new User();
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

//
document.querySelector('#list').addEventListener('click', function(event){
    if(event.target.id ==="clickablename"){
        let id = +event.target.dataset.id + 1;
         
        fetch('https://swapi.dev/api/people/' + id)
        .then(response => response.json())
        .then(data => {

            const db =  User.getUserInstance();
            const result =  db.getUserProperty(data);
            result.then((user)=>{

                let tableHtml1 = "<div class='genderHeight' data-id=${id}>";
                tableHtml1 += `<p id='height' data-id=${id}>`;
                tableHtml1 += `Height: ${user.Height}`;
                tableHtml1 += `</p>`;
                tableHtml1 += `<p id='gender' data-id=${id}>`;
                tableHtml1 += `Gender: ${user.Gender}`;
                tableHtml1 += `</p>`;
                tableHtml1 += `<p id='clickablename1' data-id=${id}>`;
                tableHtml1 += `Name: ${user.Name}`;
                tableHtml1 += `</p>`;
                tableHtml1 += "</div>";

                event.target.parentNode.innerHTML = tableHtml1; 
            })
    
        });
        
    }
    
});



