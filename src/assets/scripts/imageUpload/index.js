

document.write(
    unescape("%3Cscript src='https://unpkg.com/sweetalert/dist/sweetalert.min.js' type='text/javascript'%3E%3C/script%3E")
  );

import * as $ from 'jquery';
import * as MODELS from '../models';

export const imageUploadFn = function(obj,cb) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: `${MODELS.API_URL}/Attachments/upload`,
        dataType: 'json',
        data: JSON.stringify(obj),
        success : function(e){
            alert('image uploaded successfully')
            cb(null,e);
        },
        error : function(e){
           alert("Error Uploading image.");
           cb(e,null);
        }
    });
 
}