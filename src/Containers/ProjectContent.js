import React from 'react'
import '../Styles/styles.css'

export default function ProjectContent() {
    return (
        <div className='container-content project-content-container'>
            <h2 className='content-header'>My recent projects</h2>
            
            <div className='project-grid'>

                <div className='project-display project-1' >
                    <img className='project-img' src='' alt=''></img>
                </div>

                <div className='project-display project-2' >
                    <img className='project-img' src='' alt=''></img>
                </div>

                <div className='project-display project-3' >
                    <img className='project-img' src='' alt=''></img>
                </div>

                <div className='project-display project-4' >
                    <img className='project-img' src='' alt=''></img>
                </div>
            </div>
        </div>
    )
}
