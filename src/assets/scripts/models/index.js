import * as $ from 'jquery';
const API_URL = 'http://13.126.228.192:3000/api';

export const Merchant  = {
    login: function(email,password,callback) {
        $.ajax({
            type: "POST",
            contentType : "application/json",
            url : `${API_URL}/Merchants/login?include=user`,
            data: JSON.stringify({email,password,ttl:604800}),
            dataType: 'json',
            success : function(e){
                callback(null,e);
            },
            error : function(e){
               callback(e, null)
            }
        });

        
    },
    logout: function(){
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: `${API_URL}/Merchants/logout?access_token=${user.id}`,
                dataType: 'json',
                success : function(e){
                    localStorage.removeItem("user");
                    $(location).attr('href','/');
                },
                error : function(e){
                   alert("Error loging out");
                }
    
    
            });
        }
        
    },
    createCampaign: function(obj,cb) {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        console.log(obj)
        if(user) {
            
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: `${API_URL}/Merchants/${user.userId}/campaigns?access_token=${user.id}`,
                dataType: 'json',
                data: JSON.stringify(obj),
                success : function(e){
                    cb(null,e);
                },
                error : function(e){
                   alert("Error creating campaign.");
                   cb(e,null);
                }
            });
        }
    }
}
