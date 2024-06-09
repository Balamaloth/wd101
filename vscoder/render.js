const fetchuserdetails =(userID) =>{
    console.log("Fetching user details");
    setTimeout(() =>{
       callback('http://image.example.com/${userID}');
    },500)

};
const downloadImage =(iamgeURL) =>{
    console.log("Download image");
    setTimeout(()=>{
        callback('image data for ${iamgeURL}');
    },500)
};
const render =(image) =>{
    console.log("render image");
};

//fetchuserdetails("bala",(iamgeURL)=>{
  //  downloadImage(ImageURL,(ImageData)=>{
    //    render(ImageData);
   // })
//})
fetchuserdetails("bala",(iamgeURL)=>{
    downloadImage(ImageURL,(ImageData)=>{
      resizeimage(imagedata,(resizedImage)=>{
        transformImage(resizeimage,(transformedImage)=>{
            render(transformedImage);
        });
      });
    });
});

const aPromise =new Promise((resolve,reject)=>{
    //...
    //resolve("")

})