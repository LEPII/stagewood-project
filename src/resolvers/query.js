const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    const allEvents = await prisma.event.findMany();
    const allPhotos = await prisma.photo.findMany();
    console.log(allPhotos);
    console.log(allEvents);
}


main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });




function getEvents(parent, args, context, info) {
  return context.prisma.event.findMany();
}
console.log(getEvents);

module.exports = {
  getEvents,
};
