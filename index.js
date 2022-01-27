const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) ;
// отправляем сообщение
