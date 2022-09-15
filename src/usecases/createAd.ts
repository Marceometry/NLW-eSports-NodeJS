import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { hourStringToMinutes } from '../utils'

const prisma = new PrismaClient()

export const createAd = async (req: Request, res: Response) => {
  const gameId = req.params.id
  const body = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      yearsPlaying: body.yearsPlaying,
      hourStart: hourStringToMinutes(body.hourStart),
      hourEnd: hourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel
    }
  })

  return res.status(201).json({ ad })
}
