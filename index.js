// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)


const nav = document.querySelector("nav")
let lastScroll = 200;

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        nav.style.top = 0;
      } else {
        nav.style.top = "-60px";
      }
})