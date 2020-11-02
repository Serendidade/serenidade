import { Router } from 'express'

const reflectionsRoutes = Router()

reflectionsRoutes.post('/', async (req, res) => {
  return res.send({ ok: true })
})

reflectionsRoutes.get('/', async (req, res) => {})
reflectionsRoutes.get('/:id', async (req, res) => {})
reflectionsRoutes.put('/:id', async (req, res) => {})
reflectionsRoutes.delete('/:id', async (req, res) => {})

export default reflectionsRoutes
