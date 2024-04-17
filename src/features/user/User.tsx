
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectUser, setUser } from "./userSlice"


export const User = () => {
    const dispatch = useAppDispatch()
    const userloged = useAppSelector(selectUser)
    const loginUser = () => {
        dispatch(setUser("sterki"))
    }
    return (
        <>
        <h2>the user is: {userloged}</h2>
        <button onClick={loginUser}>Login</button>
        </>
    )
}