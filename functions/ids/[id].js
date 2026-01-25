let me={
    nationalID: 2298260378,
citizenship:27017105935,
panID: 231
}
let toSend={}
export function onRequest(context) {
    try{
        if (context.params.id=="all"){
            toSend=me
        }else{
            toSend[context.params.id]=me[context.params.id]
        }
        return new Response(JSON.stringify(toSend));
    }catch(e){
        return new Response(JSON.stringify({"status":404}));        
    }
}