const express = require('express');
const fs = require('fs/promises')
const path = require('path')
const app = express()

const {PRIVATE_VALUE, CONFIG_VALUE} = process.env

app.get('/', async (req, res) => {
    try {
        const htmlFile = await fs.readFile(path.join(__dirname, 'index.html'), 'utf-8')
        const pageData = htmlFile.replace(/#0/, PRIVATE_VALUE).replace(/#1/, CONFIG_VALUE)
        res.setHeader('Content-Type', 'text/html')
        res.send(pageData)
    } catch(e) {
        console.error('ERROR - ', e)
        res.status(500).send('INTERNAL ERROR')
    }
})

app.listen(8089, () => console.log('Server is running...'))