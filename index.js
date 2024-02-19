

// const allBtn = document.getElementsByClassName("add-btn");


// let count = 0;

// for(btn of allBtn){

//     btn.addEventListener("click", function(e){
        
//         count = count + 1;

//         const seat = document.getElementById("seat").innerText;
        
//         document.getElementById("seat").innerText = count;


//         const button = e.target.innerText;
        
        

        
//         const name = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[15].childNodes[5].childNodes[3].childNodes[3].childNodes[1].childNodes[1].childNodes[7];
       

    

//         const select = document.getElementById("moha");

//         const selectTwo = document.getElementById("mohaTwo");

        
        
//         const div = document.createElement("div");
//     div.innerText = button;

//     select.appendChild(div);

        
        
//     const p = document.createElement("p");
//     p.innerText = button;

//     selectTwo.appendChild(p);



//     });

// }




//  start js work


    const allBtn = document.getElementsByClassName("btn");

    
    let count = 0;
    let seat = 0;

    for(const btn of allBtn){
        btn.addEventListener("click", function(e){

            btn.style.backgroundColor = "#1DD100";
            
          count = count + 1;

          

          const ticketName = e.target.innerText;
      
          
        
          if(btn < 4){

          }else if(btn >= 4){
            alert('mohadeb')
          }




            // 8 seat work 

            // const seat = document.getElementById("green-sofa").innerText;
            //  const seatConvert = parseInt(seat);
            //  console.log(typeof seatConvert)

            //  document.getElementById("green-sofa").innerText = ticketName - seatConvert;



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

          
      
        //   const p2 = document.createElement("p2");
        //   p2. innerText = Economoy;

        //   const p3 = document.createElement("p2");
        //   p3. innerText = 550;
      
      
          selectedContainer.appendChild(li);
        //   selectedContainer.appendChild(text)
        //   selectedContainer.appendChild(number);
        //   selectedContainer.appendChild(p3);
          


            

            
        // console.log(e.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[7].childNodes[0].childNodes[2]);

        // const total = convertNumber.innerText
        // parseFloat(total)
        
          // total section  


        const totalCost = document.getElementById("total").innerText;
        
        const convertedTotalCost = parseInt(totalCost);
        
        

        document.getElementById("total").innerText = parseInt(convertedTotalCost) + 550;
        


        // grand total


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



  // function apply(){
    
  //   const count = document.getElementById("dipa");
  //   // count.classList.add("hidden");
  // }



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
  
  
  