import React from 'react'

const Result = ({ calculate }) => (
    <div className='box'>
        <article className='media'>
            <div className='media-content'>
                <div className='content'>
                    <p>
                    <strong>Você irá gastar: </strong>R${calculate}
                    
                    </p>
                </div>
            </div>
        </article>
    </div>
)

export default Result
