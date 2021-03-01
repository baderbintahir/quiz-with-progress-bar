let steps = document.querySelectorAll("#progressbar li");
let qContainers = document.querySelectorAll(".q-container");

steps.forEach(step => {
    step.addEventListener('click', function(){
        qContainers.forEach(qContainer => {
            qContainer.style.display = "none";
        })

        document.querySelector(`.q${event.target.id[2]}-container`).style.display = "block";
        steps.forEach(innerStep => {            
            if(innerStep.id[2] <= step.id[2]){
                innerStep.classList.add("active");
            } else{
                innerStep.classList.remove("active");
            }
        })
    })
})

let result = 0;
let result1 = 0;
let result2 = 0;
let result3 = 0;
let result4 = 0;
let result5 = 0;

document.querySelector("#submit-1").addEventListener('click', function(){
    let a1 = document.querySelector("#q1-textfield");

    if(a1.value == 20){
        result1 = 1;
        qContainers[0].style.display = "none";
        qContainers[1].style.display = "block";
        steps[1].classList.add("active")
    } else{
        alert("You have entered the wrong answer, please try again!");
    }

})

document.querySelector("#submit-2").addEventListener('click', function(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')

    if(checkboxes[0].checked && checkboxes[4].checked && checkboxes[5].checked){
        result2 = 1;
        qContainers[1].style.display = "none";
        qContainers[2].style.display = "block";
        steps[2].classList.add("active")
    } else{
        alert("You have entered the wrong answer, please try again!");
    }

})

let a3 = document.querySelectorAll(".b")
a3.forEach(btn => {
    btn.addEventListener('click', function(){

        if(btn.classList.contains("b3")){
            result3 = 1;
            qContainers[2].style.display = "none";
            qContainers[3].style.display = "block";
            steps[3].classList.add("active")
        } else{
            alert("You have entered the wrong answer, please try again!");
        }
        
    })
})

document.querySelector("#submit-4").addEventListener('click', function(){
    let radioBtns = document.querySelectorAll('input[type="radio"]')

    if(radioBtns[2].checked){
        result4 = 1;
        qContainers[3].style.display = "none";
        qContainers[4].style.display = "block";
        steps[4].classList.add("active")
    } else{
        alert("You have entered the wrong answer, please try again!");
    }

})

let imgs = document.querySelectorAll('.img');

imgs.forEach(img => {
    img.addEventListener('click', function(){
        if(img.classList.contains('reptile')){
            result5 = 1;
            result = result1 + result2 + result3 + result4 + result5;
            // if(result > 5){
            //     result = 5;
            // }
            qContainers[4].style.display = "none";
            document.querySelector(".result-statement p").innerHTML = `Result: ${result}/5 Correct`
            document.querySelector('.result-container').style.display = "flex";
        } else{
            alert("You have entered the wrong answer, please try again!");
        }
    })
})