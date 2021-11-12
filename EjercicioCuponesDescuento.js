function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    let Cupon = document.getElementById("InputCupon");
    let CuponDescuento = Cupon.value;
    let descuento = document.getElementById("InputDesc");
    let valDescuento = descuento.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, valDescuento);
    const Price = document.getElementById("ResultPrice");
    Price.innerText = "El precio es de: $" + precioConDescuento;

    if(CuponDescuento === "melollevo"){
        const dicountValue = 15;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio es de: $" + precioConDescuento;
    }
    else if(CuponDescuento === "articulox"){
        const dicountValue = 30;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio es de: $" + precioConDescuento;
    }

    else if(CuponDescuento === "suerte"){
        const dicountValue = 25;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, dicountValue);
        const Price = document.getElementById("ResultPrice");
        Price.innerText = "El precio es de: $" + precioConDescuento;
    }

    else if (CuponDescuento != "") {
        alert ("Cupon no valido, intente de nuevo");
    }

}

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeconPrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeconPrecioDescuento) / 100;
    return precioConDescuento;

}


