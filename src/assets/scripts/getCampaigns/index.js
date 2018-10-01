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
                var sorted=[];
                succ.sort(function(succ,sorted){return succ.isApproved-sorted.isApproved});
                succ.reverse();
              for (let index = 0; index < succ.length; index++) {
                  if(succ[index].isApproved == true){
                      console.log("value of isApproved",succ[index].isApproved)
                console.log("loop works");
                $('#mainContent').append(`<div class="col-3 " style="padding-top:30px"><div class="card shadow-lg border-0 text-center"><div class="card-body ">
                <img class="card-img-top" src="`+ succ[index].displayImage +`" alt="Image Not Available">           
                <h5 class="card-title" id="campaignTitle">`+succ[index].title+`</h5>
                            <p class="card-text" id="">`+succ[index].description+`</p>
                            
                            <a  href="blank.html?id=`+ succ[index].id +`&campaignName=`+ succ[index].title +`"     class="btn btn-primary">Veritfy Coupon code</a>
                          </div></div>
                        </div></div>`)
                
             }else{
                console.log("value of isApproved",succ[index].isApproved)
                console.log("loop works");
                $('#mainContent').append(`<div class="col-3 " style="padding-top:30px"><div class="card shadow-lg border-0 text-center"><div class="card-body ">
                <img class="card-img-top" src="`+ succ[index].displayImage +`" alt="Image Not Available">            
                <h5 class="card-title" id="campaignTitle">`+succ[index].title+`</h5>
                            <p class="card-text" id="">`+succ[index].description+`</p>
                            
                            <a  href="#" onclick="(function(){alert('not approved yet');})()"  class="btn btn-light">Not Approved Yet</a>
                          </div></div>
                        </div></div>`)
             }
            }

            //   $("#anchor").click(function(){
            //     console.log("something");
            //     var val = $(this).data("custom-value");
            //     console.log(val);
            //     localStorage.setItem('currentCampaignId', val);
            // })

            }
        })   
    }
     
}());



// function getCampaignId(id){
//     localStorage.setItem('currentCampaignId', id);
//     console.log('in getCampaignID')
//     console.log(id);
// }



    

    





// }