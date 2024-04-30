"use client"

import { useMutation } from "@blitzjs/rpc"
import updateGroup from "../mutations/updateGroup"
import css from "../../styles/Group.module.scss"

const ButtonReset = () => {
  const [updateGroupMutation] = useMutation(updateGroup)

  const handleReset = async (id: number) => {
    try {
      const updated = await updateGroupMutation({
        id,
        status: true,
      })
      alert("Success!" + JSON.stringify(updated))
    } catch (error) {
      alert("Error resetting " + JSON.stringify(error, null, 2))
    }
  }

  return (
    <button className={`${css.button} ${css.buttonReset}`} onClick={async () => handleReset(id)}>
      Reset
    </button>
  )
}

export default ButtonReset
