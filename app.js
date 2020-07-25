
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
    //console.log(event.target.parentNode.getElementsByClassName)
    if(event.target.id ==="clickablename"){
        //console.log(event.target.parentNode)
        let id = +event.target.dataset.id + 1;
         
        fetch('https://swapi.dev/api/people/' + id)
        .then(response => response.json())
        .then(data => {

            const db =  user.getUserInstance();
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





document.querySelector('#list').addEventListener('click', function(event){
     
    if(event.target.id === "clickablename1"){
        if(document.getElementById("height").parentElement.dataset.id==event.target.dataset.id){
            console.log(this.document.getElementById("height").dataset.id), "kkiiuuuyy";
            
        }
        //console.log(document.getElementById("height"))
    
        console.log(event.target.dataset.id)
        let x = document.querySelectorAll("height");
        let y = document.querySelectorAll("gender");
        x.forEach((elem)=>{
           // if(elem.dataset.id == id){
                
                console.log(elem.innerHTML);
            //}
        })
        /*if (x.style.display === "none" && y.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block"
        } else {
            x.style.display = "none";
            y.style.display = "none";
        }
        */
    }
});

