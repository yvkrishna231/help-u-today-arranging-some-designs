import React from 'react';
import Clouds from './clouds.jpg';
import Elephant from './elephant.jpg'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='text' >
                    <h1 className='text-center text-light mb-3'>Help u today website is for u now ..!</h1>
                    <input className='form-control text-info' />

                </div>
                <img src={Clouds} width='99%' />
                <pre>
                    Text in a pre element
                    is displayed in a fixed-width
                    font, and it preserves
                    both      spaces and
                    line breaks
                   </pre>
                <div className='container-fluid'>
                    {/* <div className='text' >
                    <h1 className='text-center text-light mb-3'>Help u today website is for u now ..!</h1>
                    <input className='form-control text-info' />

                </div> */}
                    <img src={Clouds} width='99%' />
                    <pre>
                        Text in a pre element
                        is displayed in a fixed-width
                        font, and it preserves
                        both      spaces and
                        line breaks
                   </pre>

                </div>

            </div>
        )
    }
}

export default App;