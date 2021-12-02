import { app } from './app';

// listen port 3333
app.listen(process.env.PORT,() => {
    console.log('🚀 Back-end Started!');
  });