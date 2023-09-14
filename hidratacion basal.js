const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INPUT = document.getElementById("peso");
const BOTON = document.getElementById("calcular");

BOTON.addEventListener("click", ()) => {
    Let peso = INPUT.valueAsNumber;
}
    if (peso > 0 && peso <= 10) {
        ERROR.style.display = "none";
        Let. res = holliday (peso);
        FLU.innerHTML = res + "cc";
        FLU.style.display = "block";
        console.log(res)
        Let.mantenimiento = res * 1.5;
        FLU.innerHTML = res + "cc/hr";
        MAN.innerHTML = "m+m/2" + mantenimiento + "cc/hr";
        MAN.style.display = "block";

    } else if (peso > 30) {
        let superficieCorporal = ((peso * 4) + 7) / (peso + 90);
        FLU.innerHTML = superficieCorporal * 1500 + "cc/hr";
        MAN.innerHTML = superficieCorporal * 2000 + "cc/hr";
        FLU.style.display = "block";
        MAN.style.display = "block";
    } else {
        console.log ("error")
        ERROR.style.display = "block";
    }
});