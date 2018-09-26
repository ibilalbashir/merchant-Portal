import * as $ from 'jquery';
import * as Models from '../models';
export default (function () {
    for (let index = 0; index < 3; index++) {
        console.log("lop works")
        $('#mainContent').append(`<div class="card-body ">
                    <h5 class="card-title" id="campaignTitle">Card title</h5>
                    <p class="card-text" id="">description</p>
                    <a href="#" class="btn btn-primary">Veritfy Coupon code</a>
                  </div>
                </div>`)
        
      }
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user) {
        if(window.location.pathname !== '/') {
            $(location).attr('href', '/');
            return;
        }
       
    }
    if(user) {

        const currentDate =  new Date();
        const tokenDate = new Date(user.created);
        const difference = (currentDate - tokenDate) / 1000;
        
        if(difference > user.ttl) {
            localStorage.removeItem("user");
            $(location).attr('href', '/');
            return;
        }
    }
    $('#loginForm').submit(function(e) {
        e.preventDefault()
        const un = $('#loginUn').val();
        const pw = $('#loginPw').val();
        Models.Merchant.login(un,pw,(err,success) => {
            if(err){
                alert("Invalid email or password");
                return;
            }
            console.log(success);
            localStorage.setItem("user",JSON.stringify(success));
            $(location).attr('href', '/charts.html')
            //localStorage.setItem('loginStatus', true);
        })
      })
    $(".ti-power-off.mR-10").parent().removeAttr("href").click(() => {
        Models.Merchant.logout();
    })

    $('#createCampaignBtn').click(() => {
        $(location).attr('href', '/forms.html')
    })


    

    
    console.log("auth works")
    console.log(window.location.pathname)
  }());

