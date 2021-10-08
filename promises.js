// Day-9
//  Async Programming

let myPromise = new Promise(
    function(resolve, reject){
        let isFileDownload = true;
        if(isFileDownload){
            resolve();
        }else{
            reject();
        }
    }
);

myPromise.then(
    function(){
        console.log("File Is Uploaded Successfully");
    }
).catch(
    function(){
        console.log("File Is Not Uploaded ");
    }
);

function uploadFile(){
    console.log("File Uploaded");
}

let data = setTimeout(uploadFile, 5000);
console.log(data);