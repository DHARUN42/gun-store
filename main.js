var sidenav = document.querySelector(".side-navbar")


function shownavbar()
{

    sidenav.style.left="0"
}

function closenavbar()

{

 sidenav.style.left="-50%"

}


document.addEventListener("DOMContentLoaded", () => {

    
    const searchBox = document.getElementById("search");

    
    const allCards = document.querySelectorAll(".card");

    
    searchBox.addEventListener("keyup", () => {

        
        const keyword = searchBox.value.toLowerCase();

        
        allCards.forEach(card => {

            
            const title = card.querySelector("p").textContent.toLowerCase();

            
            if (title.includes(keyword)) {
            
                card.style.display = "flex";
            } else {
                
                card.style.display = "none";
            }

        });

    });

});




document.addEventListener("DOMContentLoaded", () => {

    const submitBtn = document.getElementById("submit");

    const nameInput = document.getElementById("name");

    const emailInput = document.getElementById("email");

    const msg = document.getElementById("msg");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


    submitBtn.addEventListener("click", () => {

        if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {

            showMsg("❌ Please fill all the details", "red");

            return;

        }

        if (!emailPattern.test(emailInput.value)) {

            showMsg("❌ Enter a valid email address", "red");

            return;

        }

        showMsg("✅ Submitted successfully!", "green");

        nameInput.value = "";

        emailInput.value = "";

    });

    function showMsg(text, color) {

        msg.textContent = text;

        msg.style.color = color;

        setTimeout(() => {

            msg.textContent = "";

        }, 50000);

    }
    
});
