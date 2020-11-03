import { Router } from 'express'
import CreateReflectionService from '../services/CreateReflectionService'
import UpdateReflectionService from '../services/UpdateReflectionService'
import ListReflectionService from '../services/ListReflectionService'
import DeleteReflectionService from '../services/DeleteReflectionService'

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

reflectionsRoutes.get('/', async (req, res) => {
  const listReflection = new ListReflectionService()

  const reflections = await listReflection.execute()

  return res.json(reflections)
})

reflectionsRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params

  const deleteReflection = new DeleteReflectionService()

  const deletionMessage = await deleteReflection.execute(id)

  return res.json(deletionMessage)
})

export default reflectionsRoutes
