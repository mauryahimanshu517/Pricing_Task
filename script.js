const elements = document.querySelectorAll(".card");

elements.forEach(element => {
    element.addEventListener("click", function (e) {

        
        elements.forEach(card => {
            let circle = card.querySelector(".insideCircle");
            let colourcard = card.nextElementSibling;

            
            card.style.borderBottom = "1px solid #ccc";  
            if (colourcard && colourcard.classList.contains("sizecolourCard")) {
                colourcard.style.borderTop = "1px solid #ccc";  
                colourcard.style.display = "none"; 
            }

            if (circle) {
                circle.style.display = "none"; 
            }
        });

      
        if (e.currentTarget.classList.contains("card")) {

            
            let circle = element.querySelector(".insideCircle");

           
            let colourcard = element.nextElementSibling;

            
            element.style.borderBottom = "none";
            if (colourcard && colourcard.classList.contains("sizecolourCard")) {
                colourcard.style.borderTop = "none";
                colourcard.style.display = "block";
            } else {
                console.log("No .sizecolourCard element found next to this .card element.");
            }

            
            if (circle) {
                circle.style.display = "block";
            } else {
                console.log("No .insideCircle element found within this .card element.");
            }

        }
    });
});
