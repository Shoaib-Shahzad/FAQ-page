let accordion = document.getElementsByClassName('container');

for(a = 0; a < accordion.length; a++ ){
    accordion[a].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}