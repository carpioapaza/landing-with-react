import React from 'react';

export function Card(props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' {...props}>
      <defs>
        <clipPath id='a'>
          <path
            d='M264.56 109c20.71-12 37.49-2.26 37.49 21.65s-16.78 53-37.49 64.94-37.49 2.26-37.49-21.65S243.85 121 264.56 109Z'
            style={{
              fill: '#f5f5f5',
            }}
          />
        </clipPath>
      </defs>
      <path
        d='m103.56 368 114.73 66.22a9.6 9.6 0 0 0 8.7 0l178.92-103.29c2.4-1.39 2.4-3.63 0-5l-114.73-66.26a9.58 9.58 0 0 0-8.69 0L103.56 363c-2.4 1.36-2.4 3.6 0 5Z'
        style={{
          fill: '#e0e0e0',
        }}
      />
      <path
        d='m107.17 352 111.48 64.37a9.72 9.72 0 0 0 8.79 0l176.75-102.03c2.43-1.4 2.43-3.67 0-5.07L292.7 244.9a9.72 9.72 0 0 0-8.79 0L107.17 347c-2.43 1.35-2.43 3.62 0 5Z'
        style={{
          fill: '#37474f',
        }}
      />
      <path
        d='M218.65 416.39 107.17 352c-2.17-1.25-2.4-3.2-.69-4.6a9.84 9.84 0 0 0-3.71 7.14v4.13a9.73 9.73 0 0 0 4.4 7.62l111.48 64.36a9 9 0 0 0 4.4 1.05v-14.26a9 9 0 0 1-4.4-1.05Z'
        style={{
          fill: '#455a64',
        }}
      />
      <path
        d='M404.19 328.62a9.7 9.7 0 0 0 4.39-7.61v-4.13a9.83 9.83 0 0 0-3.71-7.14c1.71 1.4 1.49 3.35-.68 4.6L227.44 416.39a9 9 0 0 1-4.39 1.05v14.28a9 9 0 0 0 4.39-1.05ZM167 381.73a13.47 13.47 0 0 0 12.21 0c3.37-2 3.37-5.1 0-7.05a13.54 13.54 0 0 0-12.21 0c-3.33 1.95-3.33 5.11 0 7.05Z'
        style={{
          fill: '#263238',
        }}
      />
      <path
        d='m236 402.73-106.71-61.65c-1.45-.84-1.45-2.21 0-3.05l139-80.28a5.83 5.83 0 0 1 5.27 0l106.71 61.65c1.46.84 1.46 2.2 0 3l-139 80.29a5.83 5.83 0 0 1-5.27.04Z'
        style={{
          fill: '#fff',
        }}
      />
      <path
        d='M340.38 281.61a3.43 3.43 0 0 0 3.09 0 1 1 0 0 0 0-1.79 3.43 3.43 0 0 0-3.09 0c-.86.49-.86 1.29 0 1.79ZM345.32 295.63a6.86 6.86 0 0 0 6.18 0c1.71-1 1.71-2.59 0-3.57a6.8 6.8 0 0 0-6.18 0c-1.71.94-1.71 2.58 0 3.57ZM341 289.41c1.14-.65 1.08-1.75-.14-2.45l-20.34-11.75a4.71 4.71 0 0 0-4.26-.08c-1.14.66-1.08 1.76.14 2.46l20.34 11.75a4.71 4.71 0 0 0 4.26.07Z'
        style={{
          fill: '#263238',
        }}
      />
      <path
        d='M266.49 274.33c-1.46.84-1.46 2.2 0 3l81.3 46.95a5.85 5.85 0 0 0 5.28 0l18-10.37-86.58-50ZM267.09 282.48l-6.49-3.74a1.93 1.93 0 0 0-1.75 0l-4.09 2.36c-.49.28-.49.73 0 1l.56.33-2.07 1.1c-.24.13-.22.21.06.19l3.64-.35 4.3 2.48a2 2 0 0 0 1.76 0l4.08-2.36a.54.54 0 0 0 0-1.01ZM269 292.24l-.48-1c-.62-1.31-1-3.09.8-4.12a4.87 4.87 0 0 1 4.4 0c.94.54 1.15 1.35.63 2a4.85 4.85 0 0 1 3.49.36 1.33 1.33 0 0 1 0 2.53c-1.76 1-4.84.82-7.11.47ZM179.9 327.36l81.31 46.95a5.85 5.85 0 0 0 5.28 0l63.32-36.57c1.45-.84 1.45-2.2 0-3l-81.31-46.99a5.85 5.85 0 0 0-5.28 0l-63.32 36.57c-1.46.84-1.46 2.2 0 3.04ZM180.52 332.47l-6.52-3.75a2 2 0 0 0-1.76 0l-4.09 2.36a.54.54 0 0 0 0 1l.57.33-2.07 1.09c-.25.13-.22.22 0 .19l3.64-.34 4.3 2.48a2 2 0 0 0 1.76 0l4.09-2.37a.53.53 0 0 0 .08-.99ZM182.38 342.22l-.47-1c-.63-1.31-1-3.09.8-4.13a4.85 4.85 0 0 1 4.39 0c1 .55 1.16 1.36.63 2a5 5 0 0 1 3.5.36 1.34 1.34 0 0 1 0 2.54c-1.76 1-4.84.82-7.12.47ZM156.65 337.74a5.85 5.85 0 0 1 5.28 0l81.3 46.94c1.46.84 1.46 2.21 0 3.05l-16.59 9.58-86.56-50Z'
        style={{
          fill: '#ebebeb',
        }}
      />
      <path
        d='m247 326.93-46.28 12.43 60.51 34.94a5.85 5.85 0 0 0 5.28 0l1.31-.76 26.11-38.31-55.45 10.88ZM269.79 300.05l-21.29-12.3a5.85 5.85 0 0 0-5.28 0l-23.8 13.75c1.09 2.07 3.34 4 6.75 5.67 10 4.78 26.28 4.78 36.31 0 4.2-2 6.63-4.52 7.31-7.12Z'
        style={{
          fill: '#e0e0e0',
        }}
      />
      <path
        d='m372.46 295.72-106.72-61.64a5.83 5.83 0 0 0-5.27 0l-139 80.28c-1.45.84-1.45 2.2 0 3l22.56 13 84.19 48.63a5.83 5.83 0 0 0 5.27 0l125.12-72.29 13.84-8c1.47-.77 1.47-2.14.01-2.98Z'
        style={{
          fill: '#fff',
          opacity: 0.2,
        }}
      />
      <path
        d='m372.72 295.28-88.24-51L266 233.64a6.34 6.34 0 0 0-5.78 0l-139 80.28a2.1 2.1 0 0 0 0 3.92l22.56 13L228 379.5a6.32 6.32 0 0 0 5.78 0l125.11-72.29 13.85-8a2.11 2.11 0 0 0 0-3.93Zm-.51 3.05-13.85 8-125.11 72.29a5.34 5.34 0 0 1-4.77 0L144.29 330l-22.55-13a1.12 1.12 0 0 1 0-2.17l139-80.28a5.37 5.37 0 0 1 4.77 0L284 245.2l88.24 51a1.12 1.12 0 0 1 0 2.17Z'
        style={{
          fill: '#fff',
        }}
      />
      <path
        d='M324.57 45.74c1.47-.85 2.67-.16 2.67 1.54v196.59a5.93 5.93 0 0 1-2.67 4.63l-76.72 44.3-9 30c-.81 2.72-2.43 2.84-3.61.25L227 304.86l-22.4 12.93c-1.47.85-2.67.16-2.67-1.54V119.66a5.91 5.91 0 0 1 2.67-4.63Z'
        style={{
          fill: '#1276f9',
        }}
      />
      <path
        d='M314.77 197.5a8.1 8.1 0 0 1-3.79 6.29l-42.15 24.34c-2.09 1.2-3.79.35-3.79-1.92a8.14 8.14 0 0 1 3.79-6.29L311 195.59c2.08-1.21 3.77-.35 3.77 1.91ZM307 221.81a8.13 8.13 0 0 1-3.79 6.29l-35.01 20.24c-2.09 1.21-3.78.35-3.78-1.92a8.1 8.1 0 0 1 3.78-6.28l35.05-20.24c2.09-1.21 3.75-.35 3.75 1.91ZM243.85 256.39l-.09-1.18c-1.91 4.82-4.79 8.28-8 10.13-5.67 3.28-10.74.37-10.74-8.31 0-8.18 4-17.15 10.23-20.72 4.09-2.36 6.88-.62 7.34.41v-2c0-1.11 1.13-2.66 2.51-3.46s2.52-.07 2.52 1.64v18.55c0 2.36.88 2.84 2.13 2.11 2.28-1.31 4.38-6.92 4.38-13.31 0-12.34-6.47-18.09-16.79-12.13-9.67 5.58-17.34 19.68-17.34 32 0 12.09 7.25 16.7 16.74 11.23a28.07 28.07 0 0 0 7.14-6.35c1.08-1.32 2.26-1.72 2.78-.78s.2 2.88-.87 4.2a36.52 36.52 0 0 1-9 8.08c-11.81 6.81-20.74.87-20.74-14.07 0-15.26 9.35-32.37 21.34-39.3s20.78-.77 20.78 14.67c0 9.36-3.67 17.56-8.88 20.56-2.88 1.58-4.93 1.21-5.44-1.97Zm-13.39-2.81c0 4.78 2.32 7.4 5.86 5.36s6-7.28 6-12.11c0-4.65-2.37-7-6.05-4.88-3.49 1.98-5.81 7.05-5.81 11.63ZM264.56 109c20.71-12 37.49-2.26 37.49 21.65s-16.78 53-37.49 64.94-37.49 2.26-37.49-21.65S243.85 121 264.56 109Z'
        style={{
          fill: '#fff',
        }}
      />
      <path
        d='M264.56 109c20.71-12 37.49-2.26 37.49 21.65s-16.78 53-37.49 64.94-37.49 2.26-37.49-21.65S243.85 121 264.56 109Z'
        style={{
          fill: '#f5f5f5',
        }}
      />
      <g
        style={{
          clipPath: 'url(#a)',
        }}
      >
        <path
          d='M250.89 140.75a6.71 6.71 0 0 0-4.28 2.66c-1.84 2.37-1.46 5.75 0 13.36l5.69-.87ZM284.05 129.55a11 11 0 0 0 3.56-1.68c1.75-1.47 2.2.4 1.24 2.38a11.71 11.71 0 0 1-6.59 6.16c-.06-.24-1.64-4-1.64-4ZM254.16 180s-10.6 6.84-12.9 9.25-3.25 9.92-4.1 19.11c0 0 12.07 5.09 31-4.28s20.64-16.78 20.64-16.78-2.45-11.13-3.36-14.22c-1.15-3.91-3.37-6.73-16.28-.87Z'
          style={{
            fill: '#263238',
          }}
        />
        <path
          d='M253.56 155.57c-.85.73-2.05-.57-3.09-1.38s-4.44-1.39-6.14 2.64 2.2 7.89 4.5 8.88a4.4 4.4 0 0 0 4.73-.86l.6 15.15s3 5.19 11.2 4.11 6.49-9.32 3.81-11.9v-3.12s4.23-.28 6.22-1.34c1.07-.57 3.61-4.33 5.25-8.21a33.83 33.83 0 0 0 2.18-22.91c-2.93-11.68-16.32-8.47-24.3-1.31s-4.96 20.25-4.96 20.25Z'
          style={{
            fill: '#ffa8a7',
          }}
        />
        <path
          d='M286.36 117.83c-.72-2.36-1.16-1.94-6.95 2.13a46.14 46.14 0 0 1-14.58 6.83c-4.08 1.24-9.66 2.22-12.53 6a8.78 8.78 0 0 0-1.78 5.67 2 2 0 0 0-.86-.47c-1.41-.38-3.14.65-3.87 2.31l5 1.33c-.39 2.88-1.51 11.77-.29 12.55 1.05.67 2.66 2.92 3.09 2.8 1.43-.41 2-6.75 2.78-10.59.85-4.37 1.18-6 2.75-6.18a88.58 88.58 0 0 0 15-3.73c5.4-2.11 6.95-3.9 6.95-3.9l2.88-1.83a16.14 16.14 0 0 0 2.41-12.92Z'
          style={{
            fill: '#263238',
          }}
        />
        <path
          d='M269.15 169.09s-7.57.51-10.21-.19a5.92 5.92 0 0 1-3.66-2.64 8.66 8.66 0 0 0 2.08 3.71c1.93 2 11.79 1.14 11.79 1.14ZM267.22 160.3l3.46.37a2.43 2.43 0 0 1-2.35 1.78c-.96-.1-1.45-1.06-1.11-2.15ZM272.22 146.8l.5 8.99 4.77-2.89-5.27-6.1z'
          style={{
            fill: '#f28f8f',
          }}
        />
        <path
          d='M267.33 150a2.14 2.14 0 0 1-1.51 2 1.15 1.15 0 0 1-1.52-1.17 2.15 2.15 0 0 1 1.52-2 1.14 1.14 0 0 1 1.51 1.17ZM265.72 144.69l-3.24 2.66a2.31 2.31 0 0 1 .76-2.79 1.6 1.6 0 0 1 2.48.13ZM280.86 141.89l-3-1.48a2.13 2.13 0 0 1 2.58-1.09 1.77 1.77 0 0 1 .42 2.57ZM280 146.17a2.16 2.16 0 0 1-1.51 2 1.15 1.15 0 0 1-1.52-1.17 2.15 2.15 0 0 1 1.52-2 1.14 1.14 0 0 1 1.51 1.17Z'
          style={{
            fill: '#263238',
          }}
        />
      </g>
    </svg>
  );
}