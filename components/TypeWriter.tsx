import React from 'react'

import TW from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'

type Props = {
    title:string
}

const TypeWriter = (props:Props) => {
    return (
        <div>
            <TW
                cursor
                typeSpeed={70}
                words={[props.title]}
            />
        </div>
    )
}
export default TypeWriter