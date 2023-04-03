AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },
  //Función para disparar las bolas de pintura
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var bullet = document.createElement("a-entity");

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("material", "color", "black");

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        var camera = document.querySelector("#camera").object3D;

        //Obtener la dirección de la cámara como un vector de Three.js
       

        //Establecer la velocidad y su dirección
        
        

        //Establecer la bala como una entidad dinámica
        

        //Agregar un escucha de eventos de colisión a la bala
        
        //Agregar la bala como hija de la escena
        

        //Sonido de disparo
        
      }
    });
  },

  //Función para eliminar la bala y generar mancha de pintura
  removeBullet: function (e) {
    var scene = document.querySelector("#scene");
    //Elemento de la bala
    var element = e.detail.target.el;

    //Elemento que es golpeado
    var elementHit = e.detail.body.el;

    //Crear una mancha de pintura con los siguientes pasos:
    //1.-Crear una entidad

    //2.-Obtener atributo de posicion de la bala

    //3.-Obtener atributo de rotacion del elemento golpeado

    //4.-Asignar el atributo de posición para la mancha según la posición de la bala

    //5.-Asignar el atributo de rotación para la mancha según la rotación del elemento golpeado

    //6.-Asignar el atributo de escala para la mancha como 2 2 2

    //7.-Variable que guarde numero aleatorio entre 1 y 8

    //8.-Completar el atributo del material con el nombre de la imagen de mancha a elegir según el numero aleatorio
    paint.setAttribute("material", {
      opacity: 1,
      transparent: true,
      src: "./images/paint splash-0" + "NOMBRE DE LA VARIABLE CON EL NUMERO ALEATORIO" + ".png"
    });

    //9.-Asignar el atributo de geometria para la mancha como un plano

    //10.-Agregar la mancha como hija de la escena
    

    //Eliminar escucha de evento
    element.removeEventListener("collide", this.removeBullet);

    //Remover las balas de la escena      
    scene.removeChild(element);
  },
  //Función para reproducir sonido de disparo de mancha
  
});

