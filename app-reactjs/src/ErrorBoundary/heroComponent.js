import React from 'react';
import Hero from './heroError';
import ErrorBoundary from './errorBoundary';

function Errorcomponent() {

    return (
        <div>
            <ErrorBoundary>
                <Hero heroName="Venkatesh"></Hero>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName="Gopichand"></Hero>
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName="Joker1">
                </Hero>
                <p>Replace Joker1 with Joker you will get error and click close on top right. 
                    You can see Error Boundary. 
                </p>
            </ErrorBoundary>
        </div>
    )
}

export default Errorcomponent;