'use strict'
class SipmenSocket {
  constructor (host) {
    this._ws = new WebSocket(host)
    this._subscribedChannle = []
    console.log('CONNECTING')
  }

  get ws () {
    return this._ws
  }
  send (msg) {
    const payload = {
      channel: 'courier-location',
      event: 'update',
      message: msg
    }
    this.ws.send(JSON.stringify(payload))
  }
  on (channel, event, callback) {
    this.ws.onmessage = ({data}) => {
      const payload = JSON.parse(data)
      const message = JSON.parse(payload.message)
      if (payload.event === event && payload.channel === channel) callback(message)
    }
  }
}

module.exports = SipmenSocket
