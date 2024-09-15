import React from 'react'
import { darkGray, mediumGray } from '../constents/colors'

function ShowingResults({ searchText }) {
    return (
        <>
            <div>
                <h2 style={{color: darkGray}} className='font-medium text-md mb-3'>
                    Showing results for 
                    <span style={{ color: mediumGray }}> {searchText}</span>
                </h2>
            </div>
        </>
    )
}

export default ShowingResults