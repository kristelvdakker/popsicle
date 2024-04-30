import db from "db"

async function seed() {
  const group = await db.group.create({
    data: {
      title: "My Group",
    },
  })

  await db.kid.create({
    data: {
      name: "Kristel",
      groupId: group.id,
    },
  })
  await db.kid.create({
    data: {
      name: "René",
      groupId: group.id,
    },
  })
  await db.kid.create({
    data: {
      name: "Oscar",
      groupId: group.id,
    },
  })
  await db.kid.create({
    data: {
      name: "Stijn",
      groupId: group.id,
    },
  })
  await db.kid.create({
    data: {
      name: "Erik",
      groupId: group.id,
    },
  })
  await db.kid.create({
    data: {
      name: "Julian",
      groupId: group.id,
    },
  })
}

await seed()
