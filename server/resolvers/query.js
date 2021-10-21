function getEvents(parent, args, context, info) {
  return context.prisma.new_table.findMany();
}

module.exports = {
  getEvents,
};
