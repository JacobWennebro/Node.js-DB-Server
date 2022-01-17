import Express from 'express'
import Helmet from 'helmet';

const app = Express();
const port = process.env.SERVER_PORT;

// Express plug-ins
app.use(Helmet());
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.render('index.ejs', {
        name: req.query.name,
    });
    next();
});

// Make express listen to port 
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});