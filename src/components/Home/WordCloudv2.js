import React, { useState, useEffect, useRef } from 'react';
import { Text } from '@visx/text';
import { scaleLog } from '@visx/scale';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';

const words = [
  { text: 'Hello', value: 10 },
  { text: 'World', value: 20 },
  { text: 'React', value: 15 },
  { text: 'JavaScript', value: 12 },
  { text: 'CSS', value: 8 },
  { text: 'HTML', value: 6 },
  { text: 'OpenAI', value: 18 },
  { text: 'Chatbot', value: 14 },
  { text: 'AI', value: 16 },
  { text: 'Machine Learning', value: 13 },
  { text: 'Web Development', value: 11 },
  { text: 'Design', value: 9 },
  { text: 'Frontend', value: 17 },
  { text: 'Backend', value: 7 },
  { text: 'Database', value: 10 },
  { text: 'API', value: 19 },
  { text: 'Cloud', value: 15 },
  { text: 'Server', value: 8 },
  { text: 'Security', value: 12 },
  { text: 'Testing', value: 16 },
];

export default function WordCloud({ showControls }) {
  const [spiralType, setSpiralType] = useState('archimedean');
  const [withRotation, setWithRotation] = useState(false);
  const wordCloudRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (wordCloudRef.current) {
        const { width, height } = wordCloudRef.current.getBoundingClientRect();
        setWordCloudSize({ width, height });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [wordCloudSize, setWordCloudSize] = useState({ width: 0, height: 0 });

  const wordFreq = (text) => {
    const words = text.replace(/\./g, '').split(/\s/);
    const freqMap = {};

    for (const w of words) {
      if (!freqMap[w]) freqMap[w] = 0;
      freqMap[w] += 1;
    }

    return Object.keys(freqMap).map((word) => ({ text: word, value: freqMap[word] }));
  };

  const getRotationDegree = () => {
    const rand = Math.random();
    const degree = rand > 0.5 ? 60 : -60;
    return rand * degree;
  };

  const fontScale = scaleLog({
    domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
    range: [10, 100],
  });

  const fontSizeSetter = (datum) => fontScale(datum.value);

  const fixedValueGenerator = () => 0.5;

  const colors = ['#143059', '#2F6B9A', '#82a6c2'];

  return (
    <div className="wordcloud" ref={wordCloudRef}>
      {wordCloudSize.width > 0 && wordCloudSize.height > 0 && (
        <Wordcloud
          words={words}
          width={wordCloudSize.width}
          height={wordCloudSize.height}
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
                className="wordEffect"
              >
                {w.text}
              </Text>
            ))
          }
        </Wordcloud>
      )}

      {showControls && (
        <div>
          {/* Include any control elements or options for the word cloud */}
        </div>
      )}

      <style jsx>{`
        .wordcloud {
          display: flex;
          flex-direction: column;
          user-select: none;
          width: 100%;
          height: 100%;
        }
        .wordcloud svg {
          margin: 1rem 0;
          cursor: pointer;
        }

        .wordcloud label {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          margin-right: 8px;
        }
        .wordcloud textarea {
          min-height: 100px;
        }

        .wordEffect {
          transition: font-size 0.3s ease;
        }

        .wordEffect:hover {
          font-size: 150%;
        }
      `}</style>
    </div>
  );
}
