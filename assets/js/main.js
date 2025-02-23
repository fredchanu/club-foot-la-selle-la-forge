document.addEventListener("DOMContentLoaded", () => {
    console.log("Site AS La Selle La Forge prêt !");
    
    //Filtre sur la page Convocations
    const equipeSelect = document.getElementById("equipe-select");
    if (equipeSelect) {
      equipeSelect.addEventListener("change", (e) => {
        const selectedEquipe = e.target.value;
        filterConvocations(selectedEquipe);
      });
    }
  });
  
  function filterConvocations(equipe) {
    const container = document.getElementById("convocations-container");
    if (!container) return;
    
    // Logique de filtrage : masquer/afficher en fonction de l'équipe
    const convocations = container.querySelectorAll(".convocation-item");
    convocations.forEach((item) => {
      if (equipe === "all") {
        item.style.display = "block";
      } else {
        // Exemple simplifié : on check si le h2 ou un attribut data-équipe contient l'équipe
        if (item.textContent.includes(equipe)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    });
  }
//--------------------------------------------------------//
//--------------------------------------------------------//
  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      locale: 'fr', // pour afficher en français si besoin
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }

    });
    calendar.render();
  });

//--------------------------------------------------------//
//--------------------------------------------------------//

  // Initialise LightGallery sur le conteneur des photos
  document.addEventListener('DOMContentLoaded', function() {
    const albumPhotos = document.querySelectorAll('.album-photos');
    albumPhotos.forEach(container => {
      lightGallery(container, {
        plugins: [lgThumbnail],
        licenseKey: 'your_license_key', // facultatif selon la version
        speed: 500,
        mode: 'lg-fade'
      });
    });
  });

//--------------------------------------------------------//
//--------------------------------------------------------//

  document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const menuUl = document.querySelector('.menu ul');

    if(burger && menuUl) {
      burger.addEventListener('click', function() {
        menuUl.classList.toggle('active');
      });
    }
  });

