import * as $ from 'jquery';
import * as Models from '../models';


export default (function () {
    console.log('in default functions');
    if(location.pathname === '/buttons.html') {
        console.log('in condition path name')
        Models.Merchant.getAllCampaignsFn((err,succ) => {
            if(err){
                alert('error ' ,err)
            }
            if(succ){
              //console.log(succ);
                console.log('just before loop')
              for (let index = 0; index < succ.length; index++) {
                console.log("loop works");
                $('#mainContent').append(`<div class="col-3 " style="padding-top:30px"><div class="card shadow-lg border-0 text-center"><div class="card-body ">
                            <h5 class="card-title" id="campaignTitle">`+succ[index].title+`</h5>
                            <p class="card-text" id="">`+succ[index].description+`</p>
                            <a href="blank.html" class="btn btn-primary">Veritfy Coupon code</a>
                          </div></div>
                        </div></div>`)
                
              }
            }
        })   
    }
     
}());


    

    





// }