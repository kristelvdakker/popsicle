"use client"

import { useMutation } from "@blitzjs/rpc"
import updateGroup from "../mutations/updateGroup"
import css from "../../styles/Group.module.scss"

const ButtonGo = (kids: any) => {
  const [updateGroupMutation] = useMutation(updateGroup)
  console.log("KIDS", kids)
  const ids = Array<number>
  kids.forEach(({ id }) => ids.push(id))
  const random = Math.floor(Math.random() * ids.length)

  console.log(ids[random])

  const handleClick = async (id: number) => {
    try {
      const updated = await updateGroupMutation({
        id,
        status: false,
      })
      alert("Success!" + JSON.stringify(updated))
    } catch (error) {
      alert("Error picking a random name " + JSON.stringify(error, null, 2))
    }
  }

  return (
    <button
      className={`${css.button} ${css.buttonGo}`}
      onClick={async () => handleClick(ids[random])}
    >
      Go
    </button>
  )
}

export default ButtonGo
