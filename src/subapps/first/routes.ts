import { App } from '@tinyhttp/app'

const subapp = new App()

subapp.route('/subapp/first')
  .get('/', (_, res) => res.send('hi from /subapp/first'))

export default subapp
