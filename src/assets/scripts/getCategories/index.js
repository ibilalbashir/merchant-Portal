
document.write(
    unescape("%3Cscript src='https://unpkg.com/sweetalert/dist/sweetalert.min.js' type='text/javascript'%3E%3C/script%3E")
  );


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
        Models.Merchant.getAllAmbassadorsFn((err,succ) => {
            if(err){
                console.log('error getting ambassadors')

                alert('error geting ambassadors list')
            }
            if(succ){
            console.log(succ);
                console.log('just before loop')
                for (let index = 0; index < succ.length; index++) {
                    console.log("loop works asdfsdf");
                   
                    $('#ambassadorsListDropdown').append(`<option value=${succ[index].id}>${succ[index].firstName} ${succ[index].lastName}</option>`);
                   
                    
                  }  
              
            }
        }) 
        // var ambArray =[
        //     {
        //     id: '123',
        //     name:'shafqat Mehmood',
        //     referralCode : '123456'
        // }, {
        //     id: '345',
        //     name: 'taimoor tahir',
        //     referralCode : '345678'
        // }, {
        //     id: '234',
        //     name: 'shahrukh shahid',
        //     referralCode : '567890'
        // }]
        // for (let index = 0; index < ambArray.length; index++) {
        //     console.log("loop works asdfsdf");
           
        //     $('#ambassadorsListDropdown').append(`<option value=${ambArray[index].id}>${ambArray[index].name}</option>`);
           
            
        //   }  
    }
     
}());


    

    





// }