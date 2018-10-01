import * as $ from 'jquery';
// import * as Models from '../models';


export default (function () {
    console.log('in default functions ambassador');
    if(location.pathname === '/forms.html') {
        console.log('in condition path name asdfasdfds');
        var ambArray =[
            {
            id: '123',
            name:'shafqat Mehmood',
            referralCode : '123456'
        }, {
            id: '345',
            name: 'taimoor tahir',
            referralCode : '345678'
        }, {
            id: '234',
            name: 'shahrukh shahid',
            referralCode : '567890'
        }]
        for (let index = 0; index < ambArray.length; index++) {
            console.log("loop works asdfsdf");
           
            //$('#ambassadorsListDropdown').append(`<option value="`+ambArray[index].id+`">`+ambArray[index].name+`</option>`);
            $('#ambassadorsListDropdown').append("<option>asdf</option>");
            
          }
        // Models.Merchant.getAllAmbassadorsFn((err,succ) => {
        //     if(err){
        //         alert('error ' ,err)
        //     }
        //     if(succ){
        //       //console.log(succ);
        //         console.log('just before loop')
              
        //     }
        // })   
    }
     
}());


    

    





// }