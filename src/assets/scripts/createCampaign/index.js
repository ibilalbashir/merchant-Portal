import * as $ from 'jquery';
import * as Models from '../models';
import * as imgUpload from '../imageUpload';
var base64;
export default (function () {

    
      
    $('#imgUpload').change(function($event){
      console.log($event);
      console.log($event.target.files);
      
      getBase64($event.target.files[0], result => {
       base64 = result;
       console.log(base64);
        // this.file.emit(this.base64);
      });
    });
    function getBase64(file, cb) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        cb(reader.result);
      };
      reader.onerror = function(error) {
        console.log('Error: ', error);
      };
    }
    $('#submitBtn').click(function(event){
    if(!$('#createCampaignForm')[0].checkValidity()){
      return alert("fill all the fields");
    }
        console.log("asdfasd")
        data.merchantId = JSON.parse(localStorage.getItem('user')).userId;
       
        data.campaignType = campaignTypeDropdown.val();
       data.description = description.val();
        data.termsAndConditions = termsAndConditionsTxt.val();
        data.categoryId=categoryDropdown.val();
       
        data.title = campaignTitleTxt.val() ;
        data.noOfWeeks = weekDropdown.val();
        data.startDate = campaignStartingDatePicker.val();
        
        data.createdOn = new Date();
        data.isApproved= false;
        data.discountType= discountType;
        data.discountAmount = discountAmount;
      
        data.discountUtilization = utilization;
        
        dataObj = data;
        console.log('here is campaigns data')
        console.log(dataObj);

        

        Models.Merchant.createCampaign(dataObj,(err,succ) => {
            if(err){
                alert('error ' ,err)
            }
            if(succ){
              console.log(succ);
              alert('campaign created successfully')
             imgUpload.imageUploadFn({
               model :'Campaign',
               id: succ.id,
               updateAt : 'displayImage',
               base64 : base64,
               container : `campaigns/${succ.id}`,
               fileName: `display-image-${succ.id}`
             },(err,imgUploaded) => {
               if(err) {
                 return alert("Error uploading image");
               }
               
               alert("Image uploaded successfully");
             })  
            }
        })

    })
    var data={
      
        campaignType:'',
        discountAmount :'',
        description:'',
        termsAndConditions : '',
        categoryId : '',
        title :'',
        noOfWeeks:'',
        startDate:'',
        createdOn:'',
        isApproved:'',
       
        discountAmount :'',
        discountUtilization:''
  
      }
  
      var dataObj =$('#dataObj');
      var utilizationDropdown = $('#utilizationDropdown');
      var ambassadorsUtilizationDropdown = $('#ambassadorsUtilizationDropdown');
      var refferalUtilizationDropdown = $('#refferalUtilizationDropdown');
      var discountTypeDropdown = $('#typeDropdown');
      var ambassadorDiscountTypeDropdown = $('#typeAmbDropdown');
      var referralDiscountTypeDropdown = $('#typeRefDropdown')
      var baseDiscountAmountTxt = $('#baseDiscountAmount');
      var ambassadorDiscountAmountTxt = $('#ambassadorDiscountAmount');
      var referralDiscountAmountTxt = $('#referralDiscountAmount')
      var description = $('#descriptionTxt');
      var campaignTitleTxt = $('#campaignTitleTxt');
      var termsAndConditionsTxt =$('#termsAndConditionsTxt');
      var categoryDropdown = $('#categoryDropdown');
      var campaignTypeDropdown =$('#campaignTypeDropdown');
      var campaignStartingDatePicker = $('#campaignStartingDatePicker');
      //var campaignTitleTxt = $('#campaignTitleTxt');
      var weekDropdown = $('#weekDropdown');
  
  
      const utilization = {
        "user" : {
          type : '',
          number: ''
        }
          ,
        "ambassador" :{
          type : '',
          number: ''
        }//,
        //"refferal" : {
         // type : '',
          //number : ''
       // }
      }
  
      const discountType ={
        baseDiscount:'',
        ambassadorDiscount:'',
        referralDiscount:''
      }
  
      const discountAmount = {
        baseDiscountAmount:'',
        ambassadorDiscountAmount:'',
        refferalDiscountAmount:''
      }


  //discount amount
  baseDiscountAmountTxt.on('change', function(){
      
  discountAmount.baseDiscountAmount = baseDiscountAmountTxt.val();
  })
  ambassadorDiscountAmountTxt.on('change', function(){
    discountAmount.ambassadorDiscountAmount = ambassadorDiscountAmountTxt.val();
  
  })
  referralDiscountAmountTxt.on('change',function(){
    discountAmount.refferalDiscountAmount = referralDiscountAmountTxt.val();
  
  })
  
  
  // Discount Type
  
  discountTypeDropdown.on('change', function(){
    discountType.baseDiscount = discountTypeDropdown.val();
  })
  ambassadorDiscountTypeDropdown.on('change', function(){
    discountType.ambassadorDiscount = ambassadorDiscountTypeDropdown.val();
  })
  
  referralDiscountTypeDropdown.on('change', function(){
    discountType.referralDiscount = referralDiscountTypeDropdown.val();
  })
  
      // user utilization
      utilizationDropdown.on('change',function(){
        if($('#perDayRadio').is(':checked')){
           utilization.user.type = 'n_days';
           utilization.user.number = utilizationDropdown.val();
        }else if($('#perWeekRadio').is(':checked')){
           utilization.user.type = 'n_weeks';
           utilization.user.number = utilizationDropdown.val();
        }else if($('#perCampaignRadio').is(':checked')){
           utilization.user.type = 'n_campaign'
           utilization.user.number = utilizationDropdown.val();
        }
      })
      //ambassador utilization
      ambassadorsUtilizationDropdown.on('change',function(){
        if($('#ambassadorPerDayRadio').is(':checked')){
           utilization.ambassador.type ='n_days';
           utilization.ambassador.number= ambassadorsUtilizationDropdown.val();
        }else if($('#ambassadorPerWeekRadio').is(':checked')){
           utilization.ambassador.type = 'n_weeks';
           utilization.ambassador.number= ambassadorsUtilizationDropdown.val();
        }else if($('#ambassadorPerCampaignRadio').is(':checked')){
           utilization.ambassador.perCampaign = 'n_campaign';
           utilization.ambassador.number= ambassadorsUtilizationDropdown.val();
        }
      })
  
  
  
    // referal utilization
    refferalUtilizationDropdown.on('change',function(){
     
        if($('#refferalPerDayRadio').is(':checked')){
           utilization.refferal.type = 'n_days';
           utilization.refferal.number = refferalUtilizationDropdown.val();
        }else if($('#refferalPerWeekRadio').is(':checked')){
          utilization.refferal.type = 'n_weeks';
           utilization.refferal.number = refferalUtilizationDropdown.val();
        }else if($('#refferalPerCampaignRadio').is(':checked')){
          utilization.refferal.type = 'n_campaign';
           utilization.refferal.number = refferalUtilizationDropdown.val();
        }
      })
  
      
  
        // function onSubmit( form ){
         
          
         
        // }
  
      
}());