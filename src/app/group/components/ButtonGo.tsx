"use client"

import { useMutation } from "@blitzjs/rpc"
import updateGroup from "../mutations/updateGroup"
import css from "../../styles/Group.module.scss"

const ButtonGo = (kids: any) => {
  const [updateGroupMutation] = useMutation(updateGroup)
  console.log("KIDS", kids)
  const ids = kids.map((item) => item.id)
  const random = ids[Math.floor(Math.random() * ids.length)]

  const handleClick = async (id: number) => {
    try {
      const updated = await updateGroupMutation({
        id: ids[random],
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
