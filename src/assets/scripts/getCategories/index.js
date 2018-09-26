import * as $ from 'jquery';
import * as Models from '../models';


export default (function () {
    console.log('in default functions');
    if(location.pathname === '/forms.html') {
        console.log('in condition path name')
        Models.Merchant.getAllCategoriesFn((err,succ) => {
            if(err){
                alert('error ' ,err)
            }
            if(succ){
              //console.log(succ);
                console.log('just before loop')
              for (let index = 0; index < succ.length; index++) {
                console.log("loop works");
               
                $('#categoryDropdown').append(`<option value="`+succ[index].id+`">`+succ[index].name+`</option>`);
                
              }
            }
        })   
    }
     
}());


    

    





// }