import { Router } from 'express'
import CreateReflectionService from '../services/CreateReflectionService'

const reflectionsRoutes = Router()

reflectionsRoutes.post('/', async (req, res) => {
  const { content, id_user } = req.body

  const createReflecion = new CreateReflectionService()

  const reflection = await createReflecion.execute({ content, id_user })

  return res.json(reflection)
})

export default reflectionsRoutes
