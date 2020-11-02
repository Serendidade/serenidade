import { Router } from 'express'
import CreateMeditationService from '../services/CreateMeditationService'
import DeleteMeditationService from '../services/DeleteMeditationService'
import ListMeditationService from '../services/ListMeditationService'
import ShowMeditationService from '../services/ShowMeditationService'
import UpdateMeditationService from '../services/UpdateMeditationService'

const meditationsRoutes = Router()

meditationsRoutes.post('/', async (req, res) => {
  const { description, type, guide, path } = req.body

  const createMeditation = new CreateMeditationService()

  const meditation = await createMeditation.execute({
    description,
    type,
    guide,
    path,
  })

  return res.json(meditation)
})

meditationsRoutes.get('/', async (req, res) => {
  const listMeditation = new ListMeditationService()

  const meditations = await listMeditation.execute()

  return res.json(meditations)
})

meditationsRoutes.get('/:id', async (req, res) => {
  const { id } = req.params

  const showMeditation = new ShowMeditationService()

  const meditation = await showMeditation.execute(Number(id))

  return res.json(meditation)
})

meditationsRoutes.put('/:id', async (req, res) => {
  const { id } = req.params

  const updateMeditation = new UpdateMeditationService()
  const updatedMeditation = await updateMeditation.execute(req.body, id)

  return res.json(updatedMeditation)
})

meditationsRoutes.delete('/:id', async (req, res) => {
  const { id } = req.params

  const deleteMeditation = new DeleteMeditationService()
  const deletionMessage = await deleteMeditation.execute(id)

  return res.json(deletionMessage)
})

export default meditationsRoutes
