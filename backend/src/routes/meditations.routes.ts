import { Router } from 'express'

const meditationsRoutes = Router()

meditationsRoutes.post('/', async (req, res) => {
  res.send({ ok: true })
})

export default meditationsRoutes
