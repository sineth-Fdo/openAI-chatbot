const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {  OpenAIApi} = require('openai');

const openai =  OpenAIApi({
    apiKey: process.env.OPENAI_SECRET_KEY,
    
});



// setup server 
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/completions', async (req, res) => {

    const {prompt} = req.body;

    const response = await openai.createCompletion({
    
        engine: 'gpt-3.5-turbo',
        temprature: 0,
        maxTokens: 512,
        prompt : prompt,
    });
    res.send(response.data.choices[0].text);


});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});