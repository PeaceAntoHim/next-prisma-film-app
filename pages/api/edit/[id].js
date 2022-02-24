import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
   const movieId = req.query.id;
   const {
      title,
      year,
      description,
      slug
   } = req.body;
   const updateMovie = await prisma.movie.update({

      where: { id: Number(movieId) },
      data: { 
         title,
         year,
         description,
         slug
       },
   })
  res.json(updateMovie);
};