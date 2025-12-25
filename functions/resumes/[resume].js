export function onRequest(context) {
  return new Response(JSON.stringify(getMetaData(context.params.resume)));
}

export function getMetaData(x){
    return {mydata:{name:"saman"}}
}