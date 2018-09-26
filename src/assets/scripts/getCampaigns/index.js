import * as $ from 'jquery';
import * as Models from '../models';

export default(function(){
    for (let index = 0; index < 3; index++) {
        console.log("lop works")
        $('#mainContent').append(`<div class="card-body ">
                    <h5 class="card-title" id="campaignTitle">Card title</h5>
                    <p class="card-text" id="">description</p>
                    <a href="#" class="btn btn-primary">Veritfy Coupon code</a>
                  </div>
                </div>`)
        
      }
}());