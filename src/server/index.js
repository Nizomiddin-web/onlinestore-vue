export default function loginRequet(data){
    return new Promise((resolve,reject)=>{
        if (data.username=='Nizomiddin') {
            setTimeout(() => {
                resolve(
                    {
                        username:data.username,
                        token: token()
                    }
                )
            }, 3000);
        }else{
            setTimeout(()=>{
                reject('User topilmadi!!!')
            },2000)   
        }
        
    })
}

function token() {
    return Math.random().toString(36).substr(2); // remove `0.`
};