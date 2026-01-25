let me={
    NationalID: 2298260378,
citizenship:27017105935,
PanID: 231
}
let toSend={}
export function onRequest(context) {
    try{
        toSend[context.params.id]=me[context.params.id]
        return new Response(JSON.stringify({toSend}));
    }catch(e){
        return new Response(JSON.stringify({"status":404}));        
    }
}