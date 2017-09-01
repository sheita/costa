var infosShown = false;

var tntFinder = {
  // Liste des chaînes
  chaines: ['TF1',
            'France 2',
            'France 3',
            'Canal+',
            'France 5',
            'M6',
            'Arte',
            'C8',
            'W9',
            'TMC',
            'NT1',
            'NRJ12',
            'LCP',
            'France 4',
            'BFM TV',
            'CNews',
            'CStar',
            'Gulli',
            'France 0',
            'HD1',
            'L\'Equipe',
            '6ter',
            'Numero 23',
            'RMC Découverte',
            'Chérie 25',
            'LCI',
            'France Info'],

  // Fonction pour trouver une chaîne à partir de l'input HTML
  verificationChaineValide: function(numero) {
    return ((0 < numero) && (numero <= this.chaines.length) && (numero % 1 == 0));
  },

  trouverUneChaineValide: function(numero) {
    return this.chaines[numero-1];
  },

  creerLienImg: function(numero) {
    var element = document.createElement("img");
    element.setAttribute('src', 'channels/' + numero + '.png');
    element.setAttribute('id', 'logoImage');
    return element;
  }
};

// Fonction qui s'active onclick
var handlers = {
  trouverUneChaine: function() {
    debugger;
    var numeroInput = document.getElementById('numeroInput');
    var numero = numeroInput.valueAsNumber;
    var message;
    var lienImg;
    var isChaineValide = tntFinder.verificationChaineValide(numero);

    if (isChaineValide) {
      message = 'La chaîne numéro <b>' + numero + '</b> correspond à <b>' + tntFinder.trouverUneChaineValide(numero).replace(/ /g, "&nbsp;") + '</b>.';
      lienImg = tntFinder.creerLienImg(numero);
    } else {
      message = 'La chaîne <b>' + numeroInput.value + '</b> n\'existe pas.';
    }

    switch(numero) {
      case 42:
        message = 'Tu viens de trouver le sens de la vie! Bravo 👏';
        break;
      case 69:
        message = 'Héhé 😈';
        break;
      case 404:
        message = 'Error 404: <b>CHAINE NOT FOUND</b>'
        break;
      case 420:
        message = 'C\'est l\'heure du joint!';
        break;
      case 666:
        message = 'Ne regardez jamais la chaîne <b>666</b>. Elle pourrait détruire votre âme. <b>:)</b>';
        break;
    }

    view.afficherMessage(message);
    view.afficherLogo(lienImg, isChaineValide);
    numeroInput.value = '';
  },
  moreInfo: function() {
    var moreInfos = document.getElementById('moreInfos');

    if (!infosShown) {
      moreInfos.style.display = "block";
      infosShown = true;
    } else {
      moreInfos.style.display = "none";
      infosShown = false;
    }
  }
};

// Fonction qui affiche le résultat sur la page
var view = {
  afficherMessage: function(message) {
    var resultat = document.getElementById('resultat');
    resultat.innerHTML = message;
    resultat.style.display = "block";
  },
  afficherLogo: function(logoChaineImgElement, isChaineValide) {
    var elementDuLogo = document.getElementById('logoChaine');
    elementDuLogo.innerHTML = '';
    if (isChaineValide) {
      elementDuLogo.appendChild(logoChaineImgElement);
      elementDuLogo.style.display = "block";
    } else {
      elementDuLogo.style.display = "none";
    }
  }
};
