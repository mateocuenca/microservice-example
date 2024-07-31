import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.send('HEllo world')
});

app.listen(PORT, () => {
    console.log(`SErver is running at http://localhost:${PORT}`);
})