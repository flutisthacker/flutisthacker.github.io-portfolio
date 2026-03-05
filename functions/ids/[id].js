let me={
    nationalID: "2298260378x",
citizenship:"27017105935x",
panID: "129447117x",
prabhu: "0660119224100011x",
"sunrise":"01010319928013x",
drivingL:"030601048967x",
"voter":"18286971|1823x"
}
export function onRequest(context) {
    let toSend={}
    try{
        if (context.params.id=="all"){
            toSend=me
        }else if (context.params.id=="allx"){
            toSend=btoa(JSON.stringify(me))
        }
        else{
            toSend[context.params.id]=me[context.params.id]
        }
        return new Response(JSON.stringify(toSend));
    }catch(e){
        return new Response(JSON.stringify({"status":404}));        
    }
}