const express = require('express');
const app = express();
const axios = require('axios');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://nnlsdaujqjaletxnnzek.supabase.co/rest/v1/equipos', {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ubHNkYXVqcWphbGV0eG5uemVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NDc1NjUsImV4cCI6MjA1OTEyMzU2NX0.dIrHtWtZWH8syQPewpZIlEpKlf4dcwXXB7WIL37mScU'
            },
        });
        res.send("equipos");
        //res.view('index');
        //res.json(response.data);
    }
    catch (error) {
        res.status(500).send('Error calling external API')
    }
});

app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ${port}');
})