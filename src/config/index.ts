import "dotenv/config";
import {Config} from "../common/type/config";


const config: Config = {
    PORT: process.env.port ? Number(process.env.port) : 4000,
};

export default config;
