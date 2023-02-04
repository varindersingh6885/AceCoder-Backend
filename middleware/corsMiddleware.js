import cors from 'cors';

const corsOptions = {
    origin : 'https://acecoder-frontend.onrender.com',
    optionsSuccessStatus : 200
}

export default cors(corsOptions);