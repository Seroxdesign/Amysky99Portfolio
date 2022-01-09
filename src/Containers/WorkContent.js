import React from 'react'
import WorkList from 'Components/WorkList'
import ComingSoon from 'Components/ComingSoon'
import '../Styles/styles.css'

export default function WorkContent() {
    return (
        <div className='work-content'>

            <div className=''>
                <h3 className='content-header'>MY WORK</h3>
            </div>

            <WorkList />

         

            <div className=''>
                <h3 className='content-header'>COMING SOON</h3>
            </div>

            <ComingSoon />
        </div>
    )
}
