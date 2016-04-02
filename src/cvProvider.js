'use strict';

var titrescv =
{'nom':'Amen Allah Mefteh','diplome':'Diplôme d’ingénieur en informatique D ESPRIT) ','experience':'Developpeur JAVA EE au sein dUPCAR','Compétances':'BI,JAVA EE,SAP,SAGE,SGBD','projet':'Projet intégré Développement à l’ESPRIT'},

;
app.service('cvProvider',function(){
this.getcv=function(){
  return titrescv;
}

})
