document.querySelector(".btn").addEventListener("click", function () {
    let height=parseInt(document.querySelector("#height").value)
    let weight=parseInt(document.querySelector("#weight").value)
    console.log(height+weight)
    if(height ==="" || isNaN(height))
    {
        document.querySelector(".result").innerHTML="Enter a valid Height"
        document.querySelector(".result").classList.add("danger");
    }
    else if(weight ==="" || isNaN(weight))
    {
        document.querySelector(".result").innerHTML="Enter a valid Weight"
        document.querySelector(".result").classList.add("danger");
    }
    else 
    {
        let bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6)
        {
            document.querySelector(".result").innerHTML=`Bhaisahab protein lo tum toh BMI:- <span>${bmi}</span>`
            document.querySelector("body").classList.add("color");
            document.querySelector(".calContainer").classList.add("color");
        }
        else if(bmi>18.6 && bmi<24.5)
        {
            document.querySelector(".result").innerHTML=`Bhaisahab bilkul Fit ho tum toh BMI:- <span>${bmi}</span>`
            document.querySelector("body").classList.add("color2");
            document.querySelector(".calContainer").classList.add("color2");
        }
        else 
        {
            document.querySelector(".result").innerHTML=`Oh bhai ab toh karlo Gym join tum BMI:-<span>${bmi}</span>`
            document.querySelector("body").classList.add("color1");
            document.querySelector(".calContainer").classList.add("color1");
        }
    }    
})