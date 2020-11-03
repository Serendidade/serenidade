import { Router } from 'express'
import CreateReflectionService from '../services/CreateReflectionService'
import UpdateReflectionService from '../services/UpdateReflectionService'

const reflectionsRoutes = Router()

reflectionsRoutes.post('/', async (req, res) => {
  const { content, user_id } = req.body

  const createReflecion = new CreateReflectionService()

  const reflection = await createReflecion.execute({ content, user_id })

  return res.json(reflection)
})

reflectionsRoutes.put('/:id', async (req, res) => {
  const { id } = req.params
  const { content, user_id } = req.body

  const updateReflection = new UpdateReflectionService()

  const reflection = await updateReflection.execute({
    content,
    reflection_id: id,
    user_id,
  })

  return res.json(reflection)
})

export default reflectionsRoutes
