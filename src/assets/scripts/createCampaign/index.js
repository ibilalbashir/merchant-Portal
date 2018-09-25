import * as $ from 'jquery';
import * as Models from '../models';
export default (function () {
    console.log("lun works")
    $('#submitBtn').click(function(event){
    
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
        console.log(dataObj);
        Models.Merchant.createCampaign(dataObj,(err,succ) => {
            if(err){
                alert('error ' ,err)
            }
            if(succ){
                alert('success' , succ);
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
      var baseDiscountAmountTxt = $('#userDiscountAmount');
      var ambassadorDiscountAmountTxt = $('#ambassadorDiscountAmount');
      var referralDiscountAmountTxt = $('#referralDiscountAmount')
      var description = $('#descriptionTxt');
      var campaignTitleTxt = $('#campaignTitleTxt');
      var termsAndConditionsTxt =$('#termsAndConditionsTxt');
      var categoryDropdown = $('#categoryDropdown');
      var campaignTypeDropdown =$('#campaignTypeDropdown');
      var campaignStartingDatePicker = $('#campaignStartingDatePicker');
      var campaignTitleTxt = $('#campaignTitleTxt');
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
  userDiscountAmountTxt.on('change', function(){
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
  
       $('#ambassadorChoiceCheckbox').click(()=>{
        if($('#ambassadorChoiceCheckbox').is(':checked')){
          $('#sameDealRadio').removeAttr('disabled');
          $('#differentDealRadio').removeAttr('disabled');
         
          
          
          
        }else{
          $('#sameDealRadio').attr('disabled',true);
          $('#differentDealRadio').attr('disabled',true);
         
  
        }
       })
  
       $('#typeDropdown').change(function(){
         var dropdownValue = $('#typeDropdown').val();
         console.log(dropdownValue)  
         if(dropdownValue == "Percentage"){
            $('#percentDiscountTxt').css("display","block");
            $('#fixedTxt').css("display","none")
           $('#freeMealDiscountTxt').css("display","none");
  
         }else if(dropdownValue == "free Meal or Product"){
           $('#freeMealDiscountTxt').css("display","block");
           $('#percentDiscountTxt').css("display","none");
           $('#fixedTxt').css("display","none");
         }else if(dropdownValue == "Fixed"){
          $('#freeMealDiscountTxt').css("display","none");
           $('#percentDiscountTxt').css("display","none");
           $('#fixedTxt').css("display","block");
         }
  
       })
  
        $('#typeAmbDropdown').change(function(){
         var dropdownValue = $('#typeAmbDropdown').val();
         console.log(dropdownValue)  
         if(dropdownValue == "Percentage"){
            $('#percentDiscountAmbTxt').css("display","block");
            $('#fixedAmbTxt').css("display","none")
           $('#freeMealDiscountAmbTxt').css("display","none");
  
         }else if(dropdownValue == "free Meal or Product"){
           $('#freeMealDiscountAmbTxt').css("display","block");
           $('#percentDiscountAmbTxt').css("display","none");
           $('#fixedAmbTxt').css("display","none");
         }else if(dropdownValue == "Fixed"){
          $('#freeMealDiscountAmbTxt').css("display","none");
           $('#percentDiscountAmbTxt').css("display","none");
           $('#fixedAmbTxt').css("display","block");
         }
  
       })
  
       $('#typeRefDropdown').change(function(){
         var dropdownValue = $('#typeRefDropdown').val();
         console.log(dropdownValue)  
         if(dropdownValue == "Percentage"){
            $('#percentDiscountRefTxt').css("display","block");
            $('#fixedRefTxt').css("display","none")
           $('#freeMealDiscountRefTxt').css("display","none");
  
         }else if(dropdownValue == "free Meal or Product"){
           $('#freeMealDiscountRefTxt').css("display","block");
           $('#percentDiscountRefTxt').css("display","none");
           $('#fixedRefTxt').css("display","none");
         }else if(dropdownValue == "Fixed"){
          $('#freeMealDiscountRefTxt').css("display","none");
           $('#percentDiscountRefTxt').css("display","none");
           $('#fixedRefTxt').css("display","block");
         }
  
       })
  
       $('#sameDealRadio').click(()=>{
        
         if($('#sameDealRadio').is(':checked')){
          
           $('#ambassadorPerDayRadio').attr('disabled',true);
           $('#ambassadorPerWeekRadio').attr('disabled',true);
           $('#ambassadorPerCampaignRadio').attr('disabled',true);
           $('#ambassadorsUtilizationDropdown').attr('disabled',true);
           $('#ambassadorsListDropdown').attr('disabled',true);
           $('#typeAmbDropdown').attr('disabled',true);
  
  
         }
       })
  
       $('#differentDealRadio').click(()=>{
         
         if($('#differentDealRadio').is(':checked')){
          
          $('#ambassadorPerDayRadio').removeAttr('disabled');
           $('#ambassadorPerWeekRadio').removeAttr('disabled');
           $('#ambassadorPerCampaignRadio').removeAttr('disabled');
           $('#ambassadorsUtilizationDropdown').removeAttr('disabled');
           $('#ambassadorsListDropdown').removeAttr('disabled');
           $('#typeAmbDropdown').removeAttr('disabled');
         }
       })
       /*  refferal  */
  
        $('#refferalsameDealRadio').click(()=>{
        
        if($('#refferalsameDealRadio').is(':checked')){
         
          $('#refferalPerDayRadio').attr('disabled',true);
          $('#refferalPerWeekRadio').attr('disabled',true);
          $('#refferalPerCampaignRadio').attr('disabled',true);
          $('#refferalUtilizationDropdown').attr('disabled',true);
          $('#typeRefDropdown').attr('disabled',true);
  
  
        }
      })
  
      $('#refferaldifferentDealRadio').click(()=>{
        
        if($('#refferaldifferentDealRadio').is(':checked')){
         
         $('#refferalPerDayRadio').removeAttr('disabled');
          $('#refferalPerWeekRadio').removeAttr('disabled');
          $('#refferalPerCampaignRadio').removeAttr('disabled');
          $('#refferalUtilizationDropdown').removeAttr('disabled');
          $('#typeRefDropdown').removeAttr('disabled');
        }
      })
  
    
}());