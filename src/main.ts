import Express from 'express'
import Helmet from 'helmet';

import Tasks from './routes/tasks'

const app = Express();
const port = process.env.SERVER_PORT;

// Express plug-ins
app.use(Helmet());
app.set('view engine', 'ejs');

app.use("/tasks", Tasks);

// Make express listen to port 
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});