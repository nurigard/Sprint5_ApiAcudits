/* Api Rest amb JsonServer
function apiAcuditsJson(){
    fetch('http://localhost:3000/acudits')
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            console.log(response)
            console.log(response[0].acudit)
        });
}
*/



function apiAcuditsJson(){
    fetch('https://icanhazdadjoke.com/slack')
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            //console.log(response)
            console.log(response.attachments[0].fallback)
        });
}

