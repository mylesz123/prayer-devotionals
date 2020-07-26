import React from 'react';

export default function Button({
    text,
    handleClick = null,
    shouldDisplay = true, 
    buttonClass = 'edit'
}) {
    const styles = {
        edit: "waves-effect waves-light btn purple accent-3",
        editRight: "waves-effect waves-light btn purple accent-3 right",
        save: "btn pink lighten-1 z-depth-0",
        delete: "btn red darken-1 z-depth-0 right",
    }

    return (
        <>
            {shouldDisplay &&
                <button
                    className={styles[buttonClass]}
                    onClick={handleClick}
                > {text}
                </button>
            }
        </>
    )
}