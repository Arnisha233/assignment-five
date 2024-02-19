
//  start js work


    const allBtn = document.getElementsByClassName("btn");

    
    let count = 0;
    let seat = 0;

    for(const btn of allBtn){
        btn.addEventListener("click", function(e){

            btn.style.backgroundColor = "#1DD100";
            
          count = count + 1;

          

          const ticketName = e.target.innerText;
    



          const selectedContainer = document.getElementById("blank");
          

          const li = document.createElement("li");
    
          const p = document.createElement("p");
          p.innerText = ticketName;
         

         


            const p2 = document.createElement("p");
          const text = document.createTextNode("Economoy ");
          
          
          


          const p3 = document.createElement("p");
          const number = document.createTextNode("550");
          
          
          
          
          li.appendChild(p);
         li.appendChild(text);
          li.appendChild(number);
      
          selectedContainer.appendChild(li);


        const totalCost = document.getElementById("total").innerText;
        
        const convertedTotalCost = parseInt(totalCost);
        
        

        document.getElementById("total").innerText = parseInt(convertedTotalCost) + 550;
        



        const grandTotalCost = document.getElementById("grand-total").innerText;

        
        const convertedGrandTotalCost = parseInt(grandTotalCost);


        document.getElementById("grand-total").innerText = convertedGrandTotalCost + 550;

      

         document.getElementById("cart-count").innerText = count;


        })
    }

    
    
    function btnName(){
      const section = document.getElementById("pop-pup");
    section.classList.remove("hidden");
  }


  const couponBtn = document.getElementById("dipa");
    couponBtn.addEventListener("click", function(){
      couponBtn.classList.add("hidden")


      const input = document.getElementById("inpup-field").value;
      console.log(input)

      if(input === "NEW15"){

      }else if(input === "Couple 20"){

      }else{
        alert("invalid coupon code")
      }
    })
  
  
  