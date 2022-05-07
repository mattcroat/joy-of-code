import { Server } from 'socket.io'

export const webSocketServer = {
  name: 'webSocketServer',
  async configureServer(server) {
    const { markdownToHTML } = await import('./markdown.js')

    const io = new Server(server.httpServer)

    io.on('connection', (socket) => {
      // receive a message from the client
      socket.on('updatePreview', async (markdown) => {
        const html = await markdownToHTML(markdown)
        // send message to the client
        socket.emit('previewUpdate', html)
      })
    })
  },
}
