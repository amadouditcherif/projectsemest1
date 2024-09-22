
window.addEventListener('click', function(event){

    let counter;


    if(event.target.dataset.action ==='plus' || event.target.dataset.action ==='minus' ){


        const counterWrapper = event.target.closest('.counter-wrapper');
        counter =counterWrapper.querySelector('[data-counter]');
         
    
    }

    
    
  //nous verifition si lelement sur lequuel on a clique 
    if(event.target.dataset.action ==='plus'){
     counter.innerText == ++counter.innerText;

    }

    if(event.target.dataset.action ==='minus'){

        //verification de l'element dans le pannier
       

       // verifie si le coumpter est sup a 1
        if(parseInt(counter.innerText) > 1){
        counter.innerText = --counter.innerText;
       }else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
      

        event.target.closest('.cart-item').remove();
        toggleCartStatus();


        calCartPriceAndDelivery();

       }
        
       if(event.target.hasAttribute('data-action')  && event.target.closest('.cart-wrapper')){
        
        calCartPriceAndDelivery();

       }
     
       
    }
});