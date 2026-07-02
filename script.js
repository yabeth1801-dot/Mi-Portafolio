function addRecommendation() {

    let recommendation = document.getElementById("new_recommendation");

    if(recommendation.value != null && recommendation.value.trim() != ""){

        console.log("New recommendation added");

        // Mostrar popup
        showPopup(true);

        let element = document.createElement("div");

        element.setAttribute("class","recommendation");

        element.innerHTML =
        "<p>\"" +
        recommendation.value +
        "\"</p>";

        document
            .getElementById("all_recommendations")
            .appendChild(element);

        recommendation.value = "";
    }

}

function showPopup(bool){

    if(bool){

        document.getElementById("popup").style.visibility="visible";

    }else{

        document.getElementById("popup").style.visibility="hidden";

    }

}