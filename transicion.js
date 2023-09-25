/*FUNCION PARA QUE CUANDO EL CURSOR HAGA HOVER EN OPCION MENU SE GENERE UN DEGRADE*/
    /*CUANDO EL CURSOR ENTRA*/
        function mouseover() {
            document.querySelector("#body").style.background = "linear-gradient(to bottom, #ffffff, #0000ff)";
        }
    /*CUANDO EL CURSOR SALE*/
        function mouseout() {
            document.querySelector("#body").style.background = "#ffffff";
        }
  
    /*ASIGNAR FUNCION A ELEMENTOS DE CLASE "MENU"*/ 
        const menuItems = document.querySelectorAll(".menu");
        menuItems.forEach((menuItem) => {
        menuItem.addEventListener("mouseover", mouseover);
        menuItem.addEventListener("mouseout", mouseout);
        });
  /*FIN FUNCION MENU*/  

