import cors from 'cors';
import express from 'express';
import { routes } from './routes';
import bodyParser from 'body-parser';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(bodyParser.json({ limit: '900kb' }));


app.listen(process.env.PORT || 3333, () => {
    console.log('listening HTTP');
});