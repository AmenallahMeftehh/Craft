'use strict';
// declaration d'un controlleur "titreCreate" et ajout des differentes informations d'un cv "cvs"
app.controller('titreCreate',function($scope){

$scope.cvs={};
// Ajouter le nom de cvs dans la propriété nom
  $scope.cvs.nom ="AMEN ALLAH MEFTEH";
  // Ajouter le titre de cvs dans la propriété titre
  $scope.cvs.titre ="Ingénieur Informatique";
  // Ajouter les propriétés :email,adresse et numéro de telephone de cvs dans l'objet information
  $scope.cvs.information={Email: "meftah.amenallah@gmail.com", Adresse:"Tunis", Tel: "54158286"};
  // Ajouter les differents diplomes de cvs dans l'objet diplome
  $scope.cvs.diplome ={
 Diplome1:"Diplôme d’ingénieur en informatique De l’Ecole Supérieure Privée d’Ingénierie et de Technologie (ESPRIT) avec Option : Enterprise Resource planning (ERP)/ Business Intelligence (BI).",
 Diplome2:"Licence fondamentale en informatique appliquée à la gestion De L’Institut Supérieur de Gestion de Tunis (ISG)"};
 // Ajouter les differentes experiences de cvs dans l'objet experience
  $scope.cvs.experience ={
experience5:"Développeur à L'UNION DE PLACEMENT ET DE CONSEIL EN ASSURANCES ET EN REASSURANCES, UPCAR et UBCI .Extractions de différentes données du personnel de l’UBCI. Mise en Place et réalisation d’une application de gestion des maladies (Saisie des bulletins de soin) et génération automatique d’un bordereau chaque Semaine.",
experience1: "Developpeur JAVA EE au sein d'UPCAR Dec 2014 - Mai 2015 Conception et Extraction des données des clients d’UPCAR, Implémentation d'une application web de gestion pour un courtier en assurances, Génération des rapports (Reçus, Quittances, Relevés des primes impayées…) Jui-Aout 2014 (2 mois) Outils: Talend, Eclipse, Tomcat, MySQL Framework: Hibernate, Spring, Prime Faces, I-Text",
experience2:"Stage au sein de la banque de l’habitat BH Jui - Aout 2014 Réalisation d’un Cube OLAP avec Mondrian, et génération des rapports et des Tableaux de bord des différentes données des agences de la banque avec Jasper report et Intégrer les rapports avec une application web réalisée avec Java.",
experience3:"Stage Développeur décisionnel à VIVO ENERGY Jan 2014 - Mai 2014 Conception et réalisation d’une application BI avec méthodologie SCRUM : Etat de l’art, rédaction des spécifications fonctionnelles et Modélisation du Datawarehouse. Intégration des données via Talend Open Studio For Data Integration. Restitution des données (Analyse OLAP avec Mondrian, Mise en oeuvre des solutions de Reporting et de tableaux de bord via QlickView, Datamining avec R).",
experience4:"Stage Développeur C# au sein de la Banque de l’Habitat (BH) : Conception et développement et implémentation d’une application de gestion des comptes clients de la banque avec asp.net C Sharp et Informix comme gestionnaire de base des données."};
// Ajouter les differentes compétances de cvs dans un tableau skills
$scope.cvs.skills=["JAVA","BI","SAP","C#","SGBD","ANGULARJS","BOOTSTRAP","JAVASCRIPT"];
// Ajouter les projets académiques de cvs dans l'objet projets
$scope.cvs.projets={projet1:"Projet d’apprentissage Business Intelligence à l’ESPRIT Gestion du taux d’absentéisme d’un établissement pédagogique Outils : SQL Server 2008 R2 (SSIS, SSAS, SSRS)."
,projet2:"Projet intégré Développement à l’ESPRIT. Conception et Développement d’une application « Wedding-Party ». Outils: Eclipse, MySQL, JSF2, Hibernate, ASP.net Méthodologie:SCRUM Langage : JEE, .C#."};
$scope.cvs.centre=["FOOTBALL","CINEMA","VOYAGE"]
$scope.cvs.langue=["ARABE","FRANCAIS","ANGLAIS"]
  });
