# SportSee

## Description

SportSee est un site web de coaching / suivi sportif qui permet aux utilisateurs de visualiser et d'analyser leurs données sportives. Ce projet consiste en la refonte de la page de Profil, qui gère l'affichage des données sportives de l'utilisateur.

Le code du site est entièrement nouveau et utilise la bibliothèque React pour le développement de l'interface utilisateur. Les principales dépendances utilisées dans le projet sont Axios et Recharts.

## Prérequis

Avant de lancer le projet, veuillez suivre les étapes suivantes :

1. Si vous souhaitez utiliser l'appel à l'API pour récupérer les données en temps réel, veuillez vous rendre sur le lien suivant : [https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) et suivre les étapes indiquées pour configurer et lancer l'API.

## Installation

Pour lancer le projet en local, suivez les étapes ci-dessous :

1. Clonez ce dépôt de code sur votre machine locale.
2. Ouvrez un terminal à la racine du projet.
3. Tapez la commande `yarn` pour installer les dépendances du projet (assurez-vous d'avoir Node.js et Yarn installés au préalable).
4. Tapez la commande `yarn dev` pour lancer le projet en mode de développement. Cela construira l'application avec Vite et la démarrera sur votre navigateur par défaut.

## Utilisation

Le site peut être utilisée avec deux sources de données différentes :

1. **Données enregistrées en local** : Par défaut, l'application est configurée pour utiliser des données pré-enregistrées en local. Pour utiliser cette option, suivez les étapes suivantes :
   - Ouvrez le fichier `/src/services/FetchData.jsx`.
   - Commentez le code de
     ```javascript
     /* Début sans APPEL à l'API */
     ```
     à
     ```javascript
     /* Fin sans APPEL à l'API */
     ```
   - Cela permettra d'utiliser les données locales pour l'affichage.

2. **Appel à l'API** : Si vous souhaitez utiliser l'appel à l'API pour récupérer les données en temps réel, suivez les étapes suivantes :
   - Ouvrez le fichier `/src/pages/Profil.jsx`.
   - Commentez les lignes de
     ```javascript
     /* Début avec APPEL à l'API */
     ```
     à
     ```javascript
     /* Fin avec APPEL à l'API */
     ```
   - Cela permettra à l'application d'utiliser l'appel à l'API pour récupérer les données sportives de l'utilisateur.

Que ce soit pour les données enregistrées en local ou pour l'appel à l'API, vous pouvez choisir entre 2 utilisateurs pour effectuer une simulation. Pour cela vous devrez commenter / décommenter une des lignes suivantes depuis le fichier `/.env` : 
  ```javascript
  VITE_USER_ID=12  // L'ID que l'on souhaite utiliser, ici Karl Dovineau
  VITE_USER_ID=18  // L'ID que l'on souhaite utiliser, ici Cecilia Ratorez
  ```

Un model (fichier `/src/models`) a également été créé pour normaliser les données et rendre le code plus flexible, facilitant ainsi les modifications en cas de changement de format des données.
