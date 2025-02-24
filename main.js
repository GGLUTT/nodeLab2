import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/student', (req, res) => {
    const students = [
        { name: 'Maks', age: 19, group: 'IK-33' },
        { name: 'Luter', age: 18, group: 'IK-33' }
    ];
    res.render('student', { students });
});



app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
