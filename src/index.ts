import 'source-map-support/register'
import app from '@/app'
import config from '@/config'

app.listen(config.port, () =>
  console.log(`application up and running on port: ${config.port}`),
)
