import * as log from 'loglevel'
import express from 'express'
import path from 'path'

var logging = log.noConflict()
logging.setLevel('INFO')

const app = express()

app.use(express.static(path.resolve(__dirname, '../public')))

app.use((req, res, next) => {
    //If we don't request a specific file (with a dot) so we send the application client
    if(req.method === 'GET' && !req.path.includes('.')){
        return res.sendFile('index.html', {root: './server/public'})
    }
    next()
})

const PORT = process.env.PORT || 6000
app.listen(PORT, () =>{
    logging.info(`Server started in mode ${process.env.NODE_ENV} on port ${PORT}`)
})