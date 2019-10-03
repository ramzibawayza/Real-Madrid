var showorder=function () {
    //input
    
    var userorder = prompt ('what is the player do you want to see,ramos or hazard');
    var orderimage='';
    var numberofimages;

    //processing
    while (userorder !== 'hazard' && userorder !== 'ramos') {
        userorder = ('pleas choose hazard or ramos');
        }
        numberofimages = prompt('how many times do you want to see?');
        for (let ctr =0;ctr < numberofimages; ctr++) {
            if (userorder === 'hazard') {
                orderimage +='<img class="style" src="image/hazard.jpg">';
            } else if (userorder === 'ramos'){
                orderimage=orderimage + '<img class="style" src="image/ramos.jpg">';
        }
    }

    //output
    return orderimage;
};
