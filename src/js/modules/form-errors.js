 function formErr(item, text,color){
    const errm =document.createElement('p');
    let marginb = window.getComputedStyle(item, null).getPropertyValue("margin-bottom");
    marginb = parseFloat(marginb);
    if (marginb>25){
        item.style.marginBottom=(marginb-20)+'px';
    }
    errm.innerText= text;
    errm.style.color=color; 
    item.parentNode.append(errm); 
    setTimeout(() => {
         errm.remove( ); 
    }, 3000);
}



(function( ){
    const forms = document.querySelectorAll('.tab-content__form');
    forms.forEach(form => {
        form.addEventListener('submit',function  (e) {
            e.preventDefault();
            const items =  form.querySelectorAll('input');
            const text = 'error message';
            const color = 'red';
            items.forEach(item => {
                formErr(item, text,color);
            });    
        })
    });
}());


