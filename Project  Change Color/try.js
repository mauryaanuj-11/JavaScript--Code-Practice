const allButton=document.querySelectorAll(".button");

const bo= document.querySelector('body');

allButton.forEach(function(item){
   // console.log(item)
    item.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target)
        if(e.target.id=='grey')
        document.body.style.backgroundColor=e.target.id
        
        if(e.target.id=='hotpink')
        bo.style.backgroundColor=e.target.id

        if(e.target.id=='blue')
        document.body.style.backgroundColor=e.target.id

        if(e.target.id=='yellow')
        bo.style.backgroundColor=e.target.id
    })
});
