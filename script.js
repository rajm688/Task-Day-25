let submit = document.getElementById("button");//selecting the submit button
submit.addEventListener("click",function click(){ // adding event listner to submit
    var chars = document.getElementsByName('radio'); // selecting radio button
    var char;
    for(var i = 0; i < 3; i++){
        if(chars[i].checked){
            char = chars[i].value;
        }
    }
    var url =`https://hp-api.herokuapp.com/api/characters/${char}`; // getting the url
    const fetchData = async ()=>{ // using asynnc and await for connecint data from API
        try{
           const response = await fetch(url); 
            var heros = await response.json();
            //creating Container elements
            let main = document.createElement("div");  
            let subdiv = document.createElement('div');
            subdiv.className="card-columns"
            main.className="container"
            main.id = "main" 
            // collecting necessary data from API
            for(let i =0 ;i<heros.length; i++){
                    let name =heros[i].name;
                    let gender = heros[i].gender;
                    let dob = heros[i].dateOfBirth;
                    let img = heros[i].image;
                    let actor = heros[i].actor;
                    let innerDiv = document.createElement("div")
                    innerDiv.className = "card"
                    innerDiv.setAttribute("style","width:100%")
                //Appending Data to HTML
                    innerDiv.innerHTML=`<img class="card-img-top" width="100px" src="${img}" alt="img not found"></img>
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
