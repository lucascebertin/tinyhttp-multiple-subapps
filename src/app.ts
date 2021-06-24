import { App } from '@tinyhttp/app'
import firstSubapp from '@/subapps/first/routes'
import secondSubapp from '@/subapps/second/routes'

const app = new App()
  .use(firstSubapp)
  .use(secondSubapp)

export default app
