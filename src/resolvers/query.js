function getEvents(parent, args, context, info) {
  return context.prisma.new_table.findMany();
}

async function getEventsFiltered(parent, args, context, info) {
  

  const where = args.filter
    ? {
        OR: [
          { title: { contains: args.filter } },
          { startDate: { contains: args.filter } },
        ],
      }
    : {};

  const links = await context.prisma.new_table.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });
  
  return links;
}

console.log(getEvents);
module.exports = {
  getEvents,
  getEventsFiltered,
};
