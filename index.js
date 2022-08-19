function validar(event){
    event.preventDefault();
    const form = document.getElementById("form");
    const inputs = document.getElementsByTagName("input");
    const thanks = document.getElementById("thanks");
    const alert = document.getElementById("alert");
    const dataForm = {};

    for(let i=0; i < inputs.length; i++){

        if (inputs[i].value === ''){
            inputs[i].style.borderColor = "red";
            if(alert.style.display == "none"){
                alert.style.display = "flex";
                alert.style.color = "red";
            }else{
                alert.style.display = "none";   
            }
        }else{
            inputs[i].style.borderColor = "";
            dataForm[inputs[i].id] = inputs[i].value;
        }
    }
    if(Object.keys(dataForm).length === 3){
        form.style.display = "none"
        thanks.style.display = "flex";
        console.log(dataForm);
    }
}