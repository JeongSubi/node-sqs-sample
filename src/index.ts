import express, {Request,Response, Express} from "express";

const app: Express = express();
const port: number = 4000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('localhost ' + port + ' opened!!');
});