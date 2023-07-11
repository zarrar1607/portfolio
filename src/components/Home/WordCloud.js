import React, { useState, useEffect, useRef } from 'react';
import { Text } from '@visx/text';
import { scaleLog } from '@visx/scale';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';
import './WordCloud.scss';
import { Col, Row } from 'react-bootstrap';
/*
Important Links:
https://airbnb.io/visx/wordcloud
https://www.reddit.com/r/reactjs/comments/14h0xm1/looking_for_a_library_that_provides_word_cloud/
https://react-wordcloud.netlify.app/readme#install
*/

export default function WordCloud(props) {
    const words = props.words
    const [spiralType, setSpiralType] = useState('archimedean');{/*'archimedean'*/}
    const [withRotation, setWithRotation] = useState(false);
    
    const getRotationDegree = () => {
        const rand = Math.random();
        const degree = rand > 0.5 ? 60 : -60;
        return rand * degree;
    };

    const [minFontSize, setMinFontSize] = useState(12);
    const [maxFontSize, setMaxFontSize] = useState(36);

    const updateFontSizes = () => {
        const xSmallMediaQuery = window.matchMedia('(max-width: 575.98px)');
        const smallMediaQuery = window.matchMedia('(max-width: 576px)');
        const mediumMediaQuery = window.matchMedia('(max-width: 768px)');
        const largeMediaQuery = window.matchMedia('(max-width: 992px)');
        const xLargeMediaQuery = window.matchMedia('(max-width: 1200px)');
        const xxLargeMediaQuery = window.matchMedia('(max-width: 1400px)');

        setMinFontSize(36);
        setMaxFontSize(96);

        if (xSmallMediaQuery.matches) {
            setMinFontSize(14);
            setMaxFontSize(32);
        } else if (smallMediaQuery.matches) {
            setMinFontSize(14);
            setMaxFontSize(32);
        } else if (mediumMediaQuery.matches) {
            setMinFontSize(18);
            setMaxFontSize(48);
        } else if (largeMediaQuery.matches) {
            setMinFontSize(20);
            setMaxFontSize(64);
        } else if (xLargeMediaQuery.matches) {
            setMinFontSize(30);
            setMaxFontSize(80);
        } else if (xxLargeMediaQuery.matches) {
            setMinFontSize(36);
            setMaxFontSize(96);
        }
    };

    useEffect(() => {
        updateFontSizes();
        window.addEventListener('resize', updateFontSizes);
        return () => window.removeEventListener('resize', updateFontSizes);
    }, []);

    const fontSizeSetter = (datum) => {
        const valueScale = scaleLog({
            domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
            range: [minFontSize, maxFontSize],
        });
        const fontSize = valueScale(datum.value);
        return fontSize;
    };

    const fixedValueGenerator = () => 0.5;

    const colors = ['#3A006E', '#8C1A6A', 'rgba(58, 0, 110, 0.5)'];



    return (
        <>           
            <div className='wordcloud border'>
                parentSize: {props.finalWidth} x {props.finalHeight}
                {/*width={wordCloudSize.width}
                        height={wordCloudSize.height}*/
                        /*width={props.finalWidth}
        height={props.finalHeight}*/}
                {props.finalWidth > 0 && props.finalHeight > 0 && (
                    <Wordcloud
                        words={words}
                        width={props.finalWidth}
                        height={props.finalHeight}
                        
                        fontSize={fontSizeSetter}
                        font={'Impact'}
                        padding={2}
                        spiral={spiralType}
                        rotate={withRotation ? getRotationDegree : 0}
                        random={fixedValueGenerator}
                    >
                        {(cloudWords) =>
                            cloudWords.map((w, i) => (
                                <Text
                                    key={w.text}
                                    fill={colors[i % colors.length]}
                                    textAnchor={'middle'}
                                    transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                                    fontSize={w.size}
                                    fontFamily={w.font}
                                    className='wordEffect'
                                >
                                    {w.text}
                                </Text>
                            ))
                        }
                    </Wordcloud>
                    )}
                </div>
        </>
    );
}
