const express = require('express');
const intelSchema = require('./schema/intelSchema');
const connectDb = require('./config/db');
const port = 3000;

const app = express();

connectDb();
app.use(express.json());

// A simple test route to create a file on database
app.get('/createintel', async (req, res) => {
    res.json('Hello World');
});

app.post('/createintel', async (req, res) => {
    try {
        const {title, description, location, agentId} = req.body;
        const Intel = new intelSchema({ title, description, location, agentId });
        console.log('Saved');
        await intel.save();
        res.status(200).json({ yourdata: intel });
    } catch (error) {
        res.status(400).json({ Error: 'Could not creat intel', error });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})