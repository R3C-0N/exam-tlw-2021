// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*----------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', main);

function main() {
    const sectionA = document.querySelectorAll('#visites a');
    for(var a of sectionA){
        a.style.textDecoration = 'none';
        a.style.color = '#666';
    }
    remplir_actu();
}

function remplir_actu(){
    let actu = [];
    const grid = document.querySelector('#grid-container');

    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(response) {
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
                actu = JSON.parse(httpRequest.responseText);

                const template = document.querySelector('#my_template');

                for (var info of actu.tableau_actu){
                    let actuNode = document.importNode(template.content, true);
                    let text = actuNode.firstElementChild.innerHTML
                        .replace(/{{actu-bouton}}/g, info.bouton)
                        .replace(/{{actu-image}}/g, info.image)
                        .replace(/{{actu-texte}}/g, info.texte)
                        .replace(/{{actu-titre}}/g, info.titre);
                    actuNode.firstElementChild.innerHTML = text;
                    grid.appendChild(actuNode);
                }
            }
        };
    httpRequest.open('GET', 'actu.json', true);
    httpRequest.send();
}

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("carte"), {
        center: { lat: 45.757, lng: 4.832 },
        zoom: 8,
        zoomControl: true,
        scaleControl: false,
    });
}
