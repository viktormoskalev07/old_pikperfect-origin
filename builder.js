const newSize = 5 ; 
const baseFolder = './dist/images/towebp'; 
 const maxsize = 2500;


const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const chalk = require('chalk')
const sizeOf = require('image-size');
const fsExtra = require('fs-extra')
let imageErrors=[] ;
// fsExtra.emptyDirSync('./build');
// let ncp = require('ncp').ncp;

// ncp.limit = 16;
//  function copyToBuild(){
     
//     ncp('./dist', 'build', function (err) {
//         if (err) {
//           return console.error(err);
//         }
//        });
//        console.log(chalk.green('finish , wait a second ..'));
//        console.log(chalk.red(imageErrors));
//  } 
 
function makeImages(){ 
const getFiles = function (dir, files_){
    
  files_ = files_ || [];
    const files = fs.readdirSync(dir);
    for (let i in files){
        const name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
};

console.log(chalk.green('images build min to:'+newSize+' px'));
 
const images = getFiles(baseFolder);
 
let current =0;
let max= images.length+1;
images.forEach(img => {
    current++;
    const sizebit= fs.statSync(img).size;
    if(sizebit>maxsize*1000){
        imageErrors.push('error!!!' + sizebit/1000 + 'kb it big!! ' );
        imageErrors.push( img );
        imageErrors.push( '\n');
        imageErrors.push( '\n');

    }
    
    const ext = path.extname(img);
    const filename =  path.basename(img ,ext);
    const dirname =path.dirname(img);  
    const outputWebp = dirname +'/'+ filename +   '.webp'; 
    const outputWebpMin = dirname +'/'+'min-'+ filename +  '.webp'; 



    const outputSizes =[
        376, 480,768 , 1440 ,5120
    ]
    let noTwiceResize = 0 
    outputSizes.forEach(item =>{
        if(filename.includes('-'+item)) 
        noTwiceResize++
    })  
    
    if((ext=='.jpg'||ext=='.jpeg'||ext=='.png'||ext=='.gif')&&!filename.includes('min-')&&!noTwiceResize){
        
        const oldSize = sizeOf(img).width;
      
    // sharp(img).webp().toFile(outputWebp, (err,info)=>{
    //     if(err){
    //         console.log(chalk.red(err));
    //     } 
    // });  
    sharp(img).webp().resize(newSize).toFile(outputWebpMin, (err,info)=>{
        if(err){
            console.log(chalk.red(err));
        } 
    });  


        //sizes in pixel
     const inpixel=  (size)=>{
        if(oldSize>size-1){
            sharp(img).webp().resize(size).toFile(dirname +'/'+ filename +'-'+size+  '.webp', (err,info)=>{
           if(err){
               console.log(chalk.red(err));
           }  
        });  
  
       } else {
           sharp(img).webp().resize(oldSize).toFile(dirname +'/'+ filename + '-'+size+ '.webp', (err,info)=>{
               if(err){
                   console.log(chalk.red(err));
               } 
            });  
            if(size <480){
                console.log(chalk.red(`image smaller then ${size}!!!`+'   __'+img));
            } 
       }
     }
 
     outputSizes.forEach(item =>{
        inpixel(item);
    }) 
          //sizes in pixel 
  

    } else {
        if (ext!=='.svg'&& ext!=='.webp'&&!filename.includes('min-')&&!noTwiceResize){
            console.log(ext)
            console.error(chalk.red('      builder.js            error in extname                         is it img ?  '+  img));
        }
    }
 
}); 
 console.log(chalk.green('converting .. '));
}
 
 makeImages();
//  console.log('it can work in background');
//  setTimeout(() => {
    
//     copyToBuild();
//  }, 2000);

 