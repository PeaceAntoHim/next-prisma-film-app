import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

/* This method to made api and then get in index async function */
export default async(req, res) => {
    const data = JSON.parse(req.body)

    const createdMovie = await prisma.movie.create({
        data
    })

    res.json(createdMovie)
}