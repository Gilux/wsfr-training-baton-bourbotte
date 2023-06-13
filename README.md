# 🪄 Le Bâton de Bourbotte
![Type](https://img.shields.io/badge/Type-WorldSkills%20France%20National%20training-purple) ![Language](https://img.shields.io/badge/Language-JavaScript/TypeScript-yellow) ![difficulty](https://img.shields.io/badge/Difficulty-****-orange)

[![Vidéo explication](https://img.youtube.com/vi/YEIo6BAvR4o/0.jpg)](https://www.youtube.com/watch?v=YEIo6BAvR4o)

À partir d’une liste de clubs et de matchs, compléter les fonctions pour :

- Déterminer quelle équipe possède le Bâton de Bourbotte à une date passée en paramètre.
- Calculer le nombre de possessions du bâton pour un club.
- Calculer le nombre total de jours en possession du bâton pour un club.
    - Pour simplifier, on inclut le jour de gain du bâton et celui de sa perte. Par exemple, si on le récupère le 1er janvier et qu’on le perd le 3, on comptera 3 jours de possession.
- Calculer un classement des clubs en fonction du nombre de jours de possession.
    - En cas d’égalité, les clubs sont triés par nom, par ordre alphabétique.

Les règles du Bâton de Bourbotte sont simples :

- La classe, lors de son instantiation, prend une liste de clubs, de matchs, et l’ID du club à qui l’on donne le bâton en premier.
    - Les clubs et les matchs sont fournis, et le fichier de fixtures ne doit pas être modifié.
- La saison commence le 05/08/2022 et se finit le 04/06/2023 (les deux jours sont inclus).
- Le club possédant le bâton le perd dès lors qu’il est battu. Le vainqueur récupère le bâton, jusqu’à sa première défaite où l’adversaire le récupère, et ainsi de suite.

Comment le résoudre ?

- Cloner le repo, ou le [lancer en Codespace](https://github.com/features/codespaces).
- Lancer `npm test`. Quelques tests doivent passer (types de retours, …), mais ceux qui dépendent de données dynamiques ne passent pas. Implémenter correctement les 4 méthodes fera tout passer au vert.
    - Dans le contexte des finales nationales, le jury aura un 2e jeu de données pour éviter que vous ne codiez les retours en dur 🧐
- Vous pouvez modifier la classe comme vous le souhaitez en ajoutant des méthodes par exemple, mais il faut que les 4 fonctions qui sont testées gardent les mêmes paramètres en entrée et en sortie.
- Une configuration de base est donnée pour la validation des types. Vous pouvez l’adapter pour utiliser réellement TypeScript mais ce n’est pas l’objet de l’exercice.
