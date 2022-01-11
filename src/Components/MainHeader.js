
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
                                'SIMPLE',
                                5000,
                                    'EASY',
                                5000,
                                'ELEGANT',
                                5000,
                                'SIMPLE',
                                5000,
                                ]}
                                wrapper={'strong'}
                                loop={1}/>
            </h2>
        </>
        
    )
}
