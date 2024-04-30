import { useMutation, useQuery } from "@blitzjs/rpc"
import Stick from "./components/Stick"
import css from "../styles/Group.module.scss"
import getGroup from "./queries/getGroup"
import { getBlitzContext } from "../blitz-server"
import ButtonGo from "./components/ButtonGo"
import ButtonReset from "./components/ButtonReset"

export default async function PlayerPage() {
  // const [group] = useQuery(getGroup, { id: 1 })
  const ctx = await getBlitzContext()
  const group = await getGroup({ id: 1 }, ctx)

  console.log("hier", group)
  // const [updateGroupMutation] = useMutation(updateGroup)
  return (
    <div className={css.container}>
      <ul>
        {group.kids.map((kid) => (
          <Stick key={kid.id} name={kid.name} id={kid.id} active={kid.active} />
        ))}
      </ul>
      <div className={css.buttonContainer}>
        <ButtonGo group={group.kids} />
        <ButtonReset />
      </div>
    </div>
  )
}
