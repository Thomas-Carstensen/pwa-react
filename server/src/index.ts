import cors from "cors";
import express from "express";

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static('build'));

app.post('/endpoint', (request, response) => {
    console.log('Server recieved request', request.body)
    response.send('OK')
})

app.listen(8000, () => console.log('Server listening on port 8000!'))