/**
 * Challenge: 
 * Part 1: 
 * Create a ToggleDisplay component and attach
 * it to Toggle as Toggle.Display.
 * 
 * It should grab the `on` value from the Toggle context
 * and render children by calling children as a function, 
 * passing the `on` value to it. (E.g. children(on)).
 */






import React from "react"
import { ToggleContext } from "./Toggle"

export default function ToggleDisplay({ children }) {
    const { on } = React.useContext(ToggleContext)
    return children(on)
}
