import { PrismaClient } from "@prisma/client";
import { connect } from "puppeteer-core";

const prisma = new PrismaClient();

async function main() {
  prisma.participant.deleteMany();
  prisma.pool.deleteMany();
  prisma.game.deleteMany();
  prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "jhon.doe@gmail.com",
      avatarUrl: "https://github.com/fabioindaiatuba.png"
    }
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example Pool",
      code: "BOL123",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        }
      }
    }
  });

  await prisma.game.create({
    data: {
      date: "2022-11-10T12:00:00.342Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    }
  })

  await prisma.game.create({
    data: { 
      date: "2022-11-10T12:00:00.342Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 3,
          secondTeamPoints: 1,
          
          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }
    }
  })

}

main()