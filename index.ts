import express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Port is currently running on ${PORT}`));