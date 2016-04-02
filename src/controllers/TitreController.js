'use strict';

app.controller('titreCreate',function($scope){


$scope.cvs={};
  $scope.cvs.nom ="AMEN ALLAH MEFTEH";
  $scope.cvs.titre ="Ingénieur Informatique";
    $scope.cvs.information={Email: "meftah.amenallah@gmail.com", Adresse:"Tunis", Tel: "54158286"};
  $scope.cvs.diplome ="Diplôme d’ingénieur en informatique De l’Ecole Supérieure Privée d’Ingénierie et de Technologie (ESPRIT) avec Option : Enterprise Resource planning (ERP)/ Business Intelligence (BI).";
  $scope.cvs.experience ={experience1: "Developpeur JAVA EE au sein d'UPCAR Dec 2014 - Mai 2015 Conception et Extraction des données des clients d’UPCAR, Implémentation d'une application web de gestion pour un courtier en assurances, Génération des rapports (Reçus, Quittances, Relevés des primes impayées…) Jui-Aout 2014 (2 mois) Outils: Talend, Eclipse, Tomcat, MySQL Framework: Hibernate, Spring, Prime Faces, I-Text",
experience2:"Stage au sein de la banque de l’habitat BH Jui - Aout 2014 Réalisation d’un Cube OLAP avec Mondrian, et génération des rapports et des Tableaux de bord des différentes données des agences de la banque avec Jasper report et Intégrer les rapports avec une application web réalisée avec Java.",
experience3:"Stage Développeur décisionnel à VIVO ENERGY Jan 2014 - Mai 2014 Conception et réalisation d’une application BI avec méthodologie SCRUM : Etat de l’art, rédaction des spécifications fonctionnelles et Modélisation du Datawarehouse. Intégration des données via Talend Open Studio For Data Integration. Restitution des données (Analyse OLAP avec Mondrian, Mise en oeuvre des solutions de Reporting et de tableaux de bord via QlickView, Datamining avec R)."};
$scope.cvs.skills=["JEE","JAVASCRIPT","BI","SAP","C#","SGBD"];
$scope.cvs.projets={projet1:"Projet d’apprentissage Business Intelligence à l’ESPRIT Gestion du taux d’absentéisme d’un établissement pédagogique Outils : SQL Server 2008 R2 (SSIS, SSAS, SSRS)."
,projet2:"Projet intégré Développement à l’ESPRIT. Conception et Développement d’une application « Wedding-Party ». Outils: Eclipse, MySQL, JSF2, Hibernate, ASP.net Méthodologie:SCRUM Langage : JEE, .C#."};


  });
