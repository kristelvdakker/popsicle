import React from "react"
import css from "../../styles/Group.module.scss"

type StickProps = {
  name: string
  id: number
  active: boolean
}

const Stick = ({ name, id, active }: StickProps) => {
  return (
    <li key={id} className={`${css.stick} ${active ? css.active : css.inactive}`}>
      <span className={css.text}>{name}</span>
    </li>
  )
}

export default Stick
