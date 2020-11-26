import { Router } from 'express'
import CreateReflectionService from '../services/Reflections/CreateReflectionService'
import UpdateReflectionService from '../services/Reflections/UpdateReflectionService'
import ListReflectionService from '../services/Reflections/ListReflectionService'
import DeleteReflectionService from '../services/Reflections/DeleteReflectionService'
import ShowReflectionService from '../services/Reflections/ShowReflectionService'

const reflectionsRoutes = Router()

reflectionsRoutes.post('/', async (req, res) => {
  const { content, userId } = req.body

  const createReflecion = new CreateReflectionService()

  const reflection = await createReflecion.execute({ content, userId })

  return res.json(reflection)
})

reflectionsRoutes.post('/update/:id', async (req, res) => {
  const { id } = req.params
  const { content, userId } = req.body
  const updateReflection = new UpdateReflectionService()

  const reflection = await updateReflection.execute({
    content,
    reflection_id: id,
    userId,
  })

  return res.json(reflection)
})

reflectionsRoutes.get('/:id', async (req, res) => {
  const { id } = req.params

  const showReflection = new ShowReflectionService()

  const reflection = await showReflection.execute(Number(id))

  return res.json(reflection)
})

reflectionsRoutes.post('/index', async (req, res) => {
  const listReflection = new ListReflectionService()
  const { userId } = req.body
  const reflections = await listReflection.execute(userId)

  return res.json(reflections)
})

reflectionsRoutes.post('/delete/:id', async (req, res) => {
  const { id } = req.params
  const { userId } = req.body

  const deleteReflection = new DeleteReflectionService()

  const deletionMessage = await deleteReflection.execute(id, userId)

  return res.json(deletionMessage)
})

export default reflectionsRoutes
