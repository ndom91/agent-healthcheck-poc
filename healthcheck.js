import axios from 'axios'

const ENDPOINT = 'https://webhook.site/35d53c8c-5215-4abc-85bb-2eca7a0eb996'

// Get status of other applications

await axios.post(ENDPOINT, {
  date: Date.now(),
  status: 'OK',
  accountId: '123456789',
  accountName: 'Mercel',
  applications: {
    'healthcheck': 'OK',
    'api': 'OK',
    'frontend': 'OK',
    'backend': 'OK',
    'database': 'OK',
    'queue': 'OK',
    'scheduler': 'OK',
    'worker': 'OK',
    'worker-1': 'OK',
    'worker-2': 'OK',
    'worker-3': 'OK',
    'worker-4': 'OK',
    'worker-5': 'OK',
    'worker-6': 'OK',
    'worker-7': 'OK',
    'worker-8': 'OK',
    'worker-9': 'OK',
    'worker-10': 'OK',
  }
})

    const newToken = Buffer.from(Math.random().toString()).toString('base64') //.substring(0, 50)
console.log('NEWTOKEN!',newToken)

