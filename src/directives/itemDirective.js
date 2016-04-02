'use strict';

app
.directive('cvDirective',function(){
return{
template:'{{titrescv.Nom}} a obtenu {{titrescv.Diplomes}} .Ses Experiences professionelles : {{titrescv.Experiences Professionelles}} /n Ses compétances sont:{{titrescv.Compétances}}'
}
})
