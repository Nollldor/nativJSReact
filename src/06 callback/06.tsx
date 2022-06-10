import React, {MouseEvent} from "react";

/*const callback = (): number => {
    alert("hey")
    return 12
}

setTimeout(callback, 1000)*/

export const User = () => {
    const deleteUser = (e:MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name)
    }
    const saveUser = () => {
        alert("user was saved")
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }
    const onNameChanged = () => {
        console.log("name changed")
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
            <input/>
            <button name="Delete" onClick={deleteUser}>Delete</button>
            <button name="Save" onClick={deleteUser}>Save</button>
        </div>

    )
}