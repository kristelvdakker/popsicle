"use server"

import { Ctx, NotFoundError } from "blitz"
import db, { Group } from "db"

type GetGroupInput = Pick<Group, "id">

export default async function getGroup({ id }: GetGroupInput, ctx: Ctx) {
  // ctx.session.$authorize()

  const group = await db.group.findFirst({ where: { id }, include: { kids: true } })

  if (!group) throw new NotFoundError()

  return group
}
