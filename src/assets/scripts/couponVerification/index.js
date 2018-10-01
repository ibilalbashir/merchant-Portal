
document.write(
    unescape("%3Cscript src='https://unpkg.com/sweetalert/dist/sweetalert.min.js' type='text/javascript'%3E%3C/script%3E")
  );

import * as $ from 'jquery';
import * as Models from '../models';

export default (function () {

    var str= GetURLParameter('campaignName');
    var replaced = str.split('%20').join(' ');
    $('#campaignNameHead').html(replaced);
    
    $('#couponVerificationBtn').click(function(){
        var couponCode = $('#couponCodeTxt').val();
        if(couponCode == ''){
            $('#couponCodeTxt').css('border-color','red');
            return swal({
                title: "Enter Coupon code",
                text: "Please Enter the coupon code in the text box",
                icon: 'warning'
            })
            
        }
        var campaignId = GetURLParameter('id');

        console.log("button is clicked");  
        console.log(GetURLParameter('id'))

        
        Models.Merchant.verifyCouponFn(campaignId,couponCode, (err, succ) =>{
            if(err){
                alert('coupon verfication error')
                console.log(err);
            }
            if(succ){
                alert('successfully verified');
                console.log(succ);
            }
        } )
        
      })
      function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}


}())


// $.urlParam('id')