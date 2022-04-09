# CPE Lyon - 3IRC - Année 2020/2021

---

## Techniques et Langages du Web
## Examen du 10 juin 2021 - Durée : 2h

---

## Sujet

Vous devez réaliser le site web d’un établissement culturel et touristique (dans le cas présent, un château). La particularité de ce site est qu’il sera monopage (single-page website en anglais). 

De tels sites se présentent sous la forme d’une seule page que l’utilisateur fait défiler verticalement pour accéder aux différentes sections.

Ce site devra être composé de 4 sections, qui sont, dans l’ordre :
1. l’accueil, qui contient notamment un menu de navigation ;
2. une section “Découvrir” avec une rapide description du château ;
3. une section “Actualités” présentant brièvement les actualités liées au château ;
4. une section ”Visites”, avec diverses informations pratiques pour organiser sa visite.

Vous trouverez en annexe de ce document, ainsi qu’en vidéo sur e-campus, des captures d’écran 
présentant le résultat attendu.

## Instructions
Vous allez devoir construire ce site étape par étape, à partir d’un squelette fourni, en codant
les réponses aux questions qui suivent. Les questions sont donc à traiter dans l’ordre ; néanmoins, ne
restez pas focalisé.e trop longtemps sur une question, et revenez-y plus tard si nécessaire.

Avant de démarrer, téléchargez le fichier exam-tlw-2021.zip disponible sur la page e-campus
du sujet. Il contient les fichiers partiellement remplis de votre site, ainsi que tous les textes et
illustrations nécessaires. Décompressez ce fichier sur votre Bureau ; vous devriez obtenir un
dossier nommé exam-tlw-2021, contenant :
- un fichier index.html à compléter
- un fichier style.css à compléter
- un fichier script.js à compléter
- un dossier images, qui contient toutes les illustrations
- un fichier actu.json, qui contient tous les éléments relatifs aux actualités
- un fichier textes.txt, qui contient tous les autres textes à utiliser dans le site.
  
Ne réorganisez pas le contenu du dossier exam-tlw-2021 !

A la fin de l’examen, vous devez déposer sur e-campus un seul fichier, contenant l’intégralité de votre site au format .zip.

Pour compresser un dossier au format .zip, faites un clic-droit sur le dossier puis choisissez
Compresser...

## Questions / Réalisation du site

Avant de démarrer, lancez Visual Studio Code puis choisissez Ouvrir un dossier / Open folder
et ouvrez le dossier exam-tlw-2021. Faites ensuite un clic-droit sur le fichier index.html et choisissez Open with Live Server (si vous ne voyez pas cette option, installez l’extension Live Server) :
votre site s’ouvre dans un navigateur ; il est vide pour l’instant, mais chaque modification dans le
code sera répercutée automatiquement ici.

Attention ! La correction est automatique. Aussi, veillez à respecter scrupuleusement (aux
minuscules / majuscules près) l’orthographe des noms de sections, de classes, d’identifiants, etc.
qui sont donnés.

## Partie 1 : Structure / HTML
Dans cette première partie, vous devez décrire la structure et le contenu de votre site, en utilisant les balises les plus appropriées, et sans vous préoccuper pour l’instant de la mise
en forme.

 Recopiez précisément (y compris les majuscules / minuscules) les noms des identifiants et
classes mentionnés, sans quoi la feuille de style pourrait ne pas reconnaître les éléments !

**Rappel :** tous les textes à utiliser sont dans le fichier textes.txt

1. Complétez le fichier index.html avec les éléments suivants :
   - le titre (de votre choix) de la page, qui apparaît dans l’onglet du navigateur
   - le fait que le site est en français
   - l’inclusion du fichier style.css
   - l’inclusion du fichier script.js
2. Ajoutez les balises permettant de créer quatre sections (vides). Chaque section possède un
   id (respectivement accueil, decouvrir, actu et visites), appartient à la classe page, et
   contient le titre de la section.
3. Complétez le code de la barre de navigation fourni : chaque item de la liste est constitué d’un
   lien vers une des sections decouvrir, actu et visites), ainsi que d’un paragraphe contenant
   un court texte décrivant la section correspondante.
4. Complétez les sections accueil et decouvrir en ajoutant dans chacune d’elle un paragraphe,
   dont le contenu est à copier depuis le fichier textes.txt.
5. Dans la section actu, ajoutez un conteneur vide, ayant pour id grid-container. Le reste de
   cette section sera traité ultérieurement.
6. Complétez la section visites : elle contient un conteneur nommé contenu-visites, qui
   contient lui-même une liste non ordonnée de trois éléments :
   - les horaires d’ouvertures
   - les tarifs
   - l’adresse, qui comprend l’adresse postale, le numéro de téléphone et l’adresse mail de
     contact (le numéro et le mail doivent être des hyperliens)

Avant de poursuivre, déplacer le code HTML de la barre de navigation au tout début de la
     section accueil (si vous obtenez un avertissement / warning, ignorez-le).

## Partie 2 : Style / CSS
Dans cette partie vous allez devoir mettre en forme votre site. Il n’est pas exigé pas que le site soit
responsive, c’est-à-dire qu’il s’adapte à la taille de l’écran de l’appareil depuis lequel il est consulté.

7. Ajoutez une règle CSS permettant de donner à toutes les balises body, div, h1, h2, p et
   section le style commun suivant :
   - pas de marge
   - pas de padding
   - famille de police à utiliser : Garamond, Georgia, 'Times New Roman', Times, serif
8. Ajoutez une règle pour toutes les sections de la classe page :
   - une section doit occuper toute la hauteur de la fenêtre (ou viewport)
   
     Pensez aux différentes unités de mesure disponibles...

9. Ajoutez une règle pour la section accueil :
   - l’image de fond est accueil.jpg ;
   - la taille de l’image de fond doit s’adapter pour recouvrir tout l’écran

   Ajoutez une règle pour la section decouvrir :
   - la couleur du texte est 777
   
   Ajoutez une règle pour la section actu :
   - l’image de fond est actu.jpg ;
   - la taille de l’image de fond doit s’adapter pour recouvrir tout l’écran

   Ajoutez une règle pour la section visites :
   - la couleur du texte est 666
   - la couleur du fond est f1efea

10. Modifiez le style de caractères par défaut du site :
    - couleur du texte : efefef
    - taille du texte : 16 pixels
    - graisse du texte : 100

    Pour les titres de premier niveau (balise h1) :
    - alignement du texte : centré
    - taille du texte : 4.6em
    - espacement entre les lettres : 2 pixels
    - padding : 100 pixels

11. Ajoutez un style pour les paragraphes :
    - taille du texte : 1.4em
    - hauteur de ligne : 1.5em
    - largeur maximale : 700px
    - alignement du texte : justifié
    - paragraphe centré horizontalement sur la page
    
    Pour le paragraphe de la section accueil uniquement :
    - alignement du texte : centré

12. Le style et les animations des paragraphes de la barre de navigation (cf. question ??) vous
    sont fournis dans le fichier CSS. Identifiez dans ce fichier le nom de la classe à attribuer à
    ces paragraphes, et effectuez ce changement dans le fichier HTML. Testez le comportement
    obtenu.

## Partie 3 : JavaScript / Autres

13. Dans le fichier script.js, modifiez le style des hyperliens de la section visites :
    - couleur du texte : 666
    - décorations : aucune

14. Créez une fonction remplir_actu() qui doit être appelée au chargement de la page HTML.
    Cette fonction doit :
    - utiliser un appel AJAX (XMLHttpRequest ou Fetch) pour récupérer le contenu du fichier
      actu.json dans un tableau JavaScript ;
    - créer trois copies du template présent dans index.html, alimentées par le contenu du
      JSON, et insérerées dans le conteneur grid-container.

15. Appliquez un effet de parallaxe sur votre site.

16. Ajoutez une carte Google Maps interactive (pas une simple image) de dimensions 400 ×
    300 dans la section Visites (l’emplacement montré sur la carte n’a pas d’importance).

## Annexes : captures d’écran des différentes sections du site

![Figure 1 – Section 1 : Accueil](./.readme-images/accueil.png "Section 1 : Accueil")
Figure 1 – Section 1 : Accueil

![Figure 2 – Section 2 : Découvrir](./.readme-images/decouvrir.png "Section 2 : Découvrir")
Figure 2 – Section 2 : Découvrir

![Figure 3 – Section 3 : Actualités](./.readme-images/actu.png "Section 3 : Actualités")
Figure 3 – Section 3 : Actualités

![Figure 4 – Section 4 : Visites](./.readme-images/visites.png "Section 4 : Visites")
Figure 4 – Section 4 : Visites
