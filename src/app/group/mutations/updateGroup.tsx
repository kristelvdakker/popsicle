import { Ctx } from "blitz"
import db from "db"

type UpdateGroupInput = {
  id: number
  status: boolean
}

export default async function updateGroup({ id, status }: UpdateGroupInput, ctx: Ctx) {
  ctx.session.$authorize()

  const kid = await db.kid.update({ where: { id }, data: { active: status } })

  return kid
}
