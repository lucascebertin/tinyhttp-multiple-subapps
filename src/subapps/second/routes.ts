import { App } from '@tinyhttp/app'

const subapp = new App()

subapp.route('/subapp/second')
  .get('/', (_, res) => res.send('hi from /subapp/second'))

export default subapp
