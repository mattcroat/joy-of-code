import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

import { handler } from '../build/handler.js'
import { markdownToHTML } from './markdown.js'

const port = 3000
const app = express()
const server = createServer(app)

const io = new Server(server)

io.on('connection', (socket) => {
  // receive a message from the client
  socket.on('updatePreview', async (markdown) => {
    const html = await markdownToHTML(markdown)
    // send message to the client
    socket.emit('previewUpdate', html)
  })
})

// https://github.com/sveltejs/kit/tree/master/packages/adapter-node#custom-server
// let SvelteKit handle everything else
app.use(handler)

server.listen(port)
