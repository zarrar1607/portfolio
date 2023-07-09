import React, { useEffect, useState } from 'react';
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
];

const colors = ['#143059', '#2F6B9A', '#82a6c2'];

const fontScale = scaleLog({
  domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
  range: [10, 100],
});

const fontSizeSetter = (datum) => fontScale(datum.value);

export default function MyWordCloud() {
  const [wordPositions, setWordPositions] = useState([]);

  useEffect(() => {
    // Generate and store word positions on initial mount
    const generatedPositions = generateWordPositions();
    setWordPositions(generatedPositions);
  }, []);

  const generateWordPositions = () => {
    const positions = {};

    // Sort words based on value in descending order
    const sortedWords = [...words].sort((a, b) => b.value - a.value);
    const centerWord = sortedWords[0];

    // Set position of center word to (0, 0)
    positions[centerWord.text] = { x: 0, y: 0 };

    // Calculate positions for surrounding words
    const radius = 50; // Adjust the radius as needed
    const angleStep = (2 * Math.PI) / (sortedWords.length - 1);

    for (let i = 1; i < sortedWords.length; i++) {
      const word = sortedWords[i];
      const angle = angleStep * (i - 1);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      positions[word.text] = { x, y };
    }

    return positions;
  };

  return (
    <div className="word-cloud-container">
      <Wordcloud
        words={words}
        width={600}
        height={400}
        fontSize={fontSizeSetter}
        font={'Impact'}
        padding={2}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => {
            const position = wordPositions[w.text];
            return (
              <Text
                key={w.text}
                fill={colors[i % colors.length]}
                textAnchor={'middle'}
                transform={`translate(${position.x}, ${position.y})`}
                fontSize={w.size}
                fontFamily={w.font}
                className="word"
              >
                {w.text}
              </Text>
            );
          })
        }
      </Wordcloud>
      <style jsx>{`
        .word-cloud-container {
          width: 600px;
          height: 400px;
        }

        .word {
          margin: 5px;
          font-size: 12px;
          transition: font-size 0.3s, font-weight 0.3s;
        }

        .word:hover {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
