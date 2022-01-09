
import React from 'react'
import Typical from 'react-typical'
import '../Styles/styles.css'

export default function MainHeader() {
    return (
        <>
            <h2 className='header'>
                DESIGN MADE  
                        <Typical
                            steps={[
                                    'EASY',
                                6000,
                                'ELEGANT',
                                6000,
                                'ROBUST',
                                6000,
                                'SIMPLE',
                                6000,
                                ]}
                                wrapper={'strong'}
                                loop={1}/>
            </h2>
        </>
        
    )
}
