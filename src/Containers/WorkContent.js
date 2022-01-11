import React from 'react'
import WorkList from 'Components/WorkList'
import '../Styles/styles.css'

export default function WorkContent() {
    return (
        <div className='work-content' >

            <div className=''>
                <h3 className='content-header'>MY WORK</h3>
            </div>

            <WorkList />

         

            
        </div>
    )
}
