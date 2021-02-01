// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     ); 
//     console.log(myPromise); 
const posts=[
    { title: 'post one', body : 'This is post one'},
    { title: 'post Two ', body : 'This is post two'}
];


function getPosts(){
    setTimeout(() =>{
        let output ='';
        posts.forEach((post,index)=>{
        output += `<li>${post.title}<li>`;
        });
        document.body.innerHTML=output;
    },1000);
} 
function createPost(post){
    return new Promise(resolve,reject)=>{
        setTimeout(()=> {
            posts.push(post);
            const error =false;
            if(!error){
                resolve();
            }else{
                reject('Error: some thing went wrong');
            }
        },200);
        })
    }
} 