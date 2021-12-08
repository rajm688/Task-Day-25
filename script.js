let submit = document.getElementById("button");
submit.addEventListener("click",function click(){
    var chars = document.getElementsByName('radio');
    var char;
    for(var i = 0; i < 3; i++){
        if(chars[i].checked){
            char = chars[i].value;
        }
    }
    var url =`http://hp-api.herokuapp.com/api/characters/${char}`;
    const fetchData = async ()=>{
        try{
           const response = await fetch(url); 
            var heros = await response.json();
            let main = document.createElement("div");  
            main.className="container"
            main.id = "main" 
            for(let i =0 ;i<heros.length; i++){
                    let name =heros[i].name;
                    let gender = heros[i].gender;
                    let dob = heros[i].dateOfBirth;
                    let img = heros[i].image;
                    let actor = heros[i].actor;
                    let subdiv = document.createElement('div');
                    let innerDiv = document.createElement("div")
                    subdiv.className="card-columns"
                    innerDiv.className = "card"
                    innerDiv.setAttribute("style","width:350px")
                    innerDiv.innerHTML=`<img class="card-img-top" width="100px" src="${img}" alt="Oops! Image Not found!!!"></img>
                                        <div class="card-body">
                                        <h4 class="card-title text-center"><u>Name:</u></h4> <h5 class="text-center">${name}</h5>
                                        <h4 class="text-center"><u>Gender:</u></h4> <h5 class="text-center">${gender}</h5><br>
                                        <h4 class="text-center"><u>DOB:</u></h4><h6 class="text-center"> ${dob}</h6><br></p>
                                        <h4 class="text-center"><u>Actor:</u></h4><h6 class="text-center"> ${actor}</h6><br></p>
                                        </div>`
                                        subdiv.append(innerDiv);
                                        main.appendChild(subdiv);
                                        
                                            }
                                        document.body.append(main);
                   
            }
        catch(err){
            alert("Something went wrong");
        }
}
fetchData();
})