

const allBtn = document.getElementsByClassName("add-btn");

let count = 0;

for(btn of allBtn){

    btn.addEventListener("click", function(e){
        
        count = count + 1;

        const seat = document.getElementById("seat").innerText;
        
        document.getElementById("seat").innerText = count;


        const button = e.target.innerText;
        
        
      

        

        
        const name = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[15].childNodes[5].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[7];
       

    

        const select = document.getElementById("moha");

        const selectTwo = document.getElementById("mohaTwo");

        
        
        const div = document.createElement("div");
    div.innerText = button;

    select.appendChild(div);

        
        
    const p = document.createElement("p");
    p.innerText = button;

    selectTwo.appendChild(p);




    });

}

