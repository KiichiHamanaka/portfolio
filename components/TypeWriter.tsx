import React from 'react'

import TW from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'

type Props = {
    title: string
}

const TypeWriter = (props:Props) => {
    return (
        <h1>
            <TW
                cursor
                typeSpeed={70}
                words={[props.title]}
            />
        </h1>

    )
}
export default TypeWriter