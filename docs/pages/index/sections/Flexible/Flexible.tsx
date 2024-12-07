import React from 'react'
import { TextBox } from '../../components/TextBox'
import { Grid } from '../../Grid'
import { SectionTextCollection } from '../../components/SectionTextCollection'
import { ParagraphTextCollection } from '../../components/ParagraphTextCollection'
import './flexible.css'
import { Slotmachine } from '../../components/Slotmachine/Slotmachine'
import { Button } from '../../components/Button/Button'
import { Link } from '@brillout/docpress'

const data = {
  caption: 'Flexible',
  title: 'Your Stack, Your Choice',
  description: [
    //<>Enjoy <b>architectural freedom</b> and use <b>any tool</b>, <b>any rendering strategy</b> (SPA/SSR/SSG), and <b>any deployment strategy</b> (static/server/edge).</>,
    <>
      Enjoy <b>architectural freedom</b> and choose any tool, rendering strategy (SPA/SSR/SSG), and deployment strategy
      (static/server/edge).
    </>,
    <>
      Use <b>Vike extensions</b> for automatic tool integration and later, if the need arises,{' '}
      <b>eject for full control</b> over tool integration.
    </>
  ]
}

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.6212 14.6541L20.6212 12.1541C20.5275 12.0371 20.4086 11.9426 20.2734 11.8777C20.1382 11.8128 19.9902 11.7791 19.8402 11.7791H13.8402V9.77914H19.8402C20.9432 9.77914 21.8402 8.88214 21.8402 7.77914V4.77914C21.8402 3.67614 20.9432 2.77914 19.8402 2.77914H5.84022C5.69025 2.77909 5.54219 2.81276 5.407 2.87768C5.27181 2.94259 5.15295 3.03708 5.05922 3.15414L3.05922 5.65414C2.91722 5.83151 2.83984 6.05194 2.83984 6.27914C2.83984 6.50635 2.91722 6.72678 3.05922 6.90414L5.05922 9.40414C5.15295 9.52121 5.27181 9.6157 5.407 9.68061C5.54219 9.74553 5.69025 9.7792 5.84022 9.77914H11.8402V11.7791H5.84022C4.73722 11.7791 3.84022 12.6761 3.84022 13.7791V16.7791C3.84022 17.8821 4.73722 18.7791 5.84022 18.7791H11.8402V22.7791H13.8402V18.7791H19.8402C19.9902 18.7792 20.1382 18.7455 20.2734 18.6806C20.4086 18.6157 20.5275 18.5212 20.6212 18.4041L22.6212 15.9041C22.7632 15.7268 22.8406 15.5063 22.8406 15.2791C22.8406 15.0519 22.7632 14.8315 22.6212 14.6541ZM5.12122 6.27914L6.32022 4.77914H19.8402L19.8422 7.77914H6.32022L5.12122 6.27914ZM19.3602 16.7791H5.84022V13.7791H19.3602L20.5602 15.2791L19.3602 16.7791Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: 'Cutting edge, at your own pace',
    href: '/why#conservative-or-cutting-edge-your-choice',
    description:
      'Choose between production-grade extensions or cutting-edge extensions; go with a conservative stack or live on the edge in unprecedented ways.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.37584 21.867H12.4009M9.38839 21.867V3.79169M9.38839 3.79169L3.36328 9.8168H21.4386M9.38839 3.79169L19.4302 9.8168"
          stroke="currentColor"
          strokeWidth="2.00837"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.4224 9.8168V13.8335C17.8197 13.8335 18.2079 13.9513 18.5382 14.172C18.8685 14.3927 19.1259 14.7064 19.2779 15.0733C19.4299 15.4403 19.4697 15.8441 19.3922 16.2337C19.3147 16.6233 19.1234 16.9812 18.8426 17.262C18.5617 17.5429 18.2038 17.7342 17.8142 17.8117C17.4247 17.8892 17.0208 17.8494 16.6539 17.6974C16.2869 17.5454 15.9732 17.288 15.7525 16.9577C15.5319 16.6274 15.4141 16.2391 15.4141 15.8419"
          stroke="currentColor"
          strokeWidth="2.00837"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Build Your Own Framework',
    href: '/why#build-your-own-framework',
    description:
      'Create an internal company framework that empowers your Software Architects to own the architecture and your Product Developers to quickly iterate.'
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width="24"
        height="24"
        fillRule="evenodd"
        clipRule="evenodd"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 95.435 95.435"
      >
        <path
          d="m59.107 41.9 3.84-2.44c13.22 2.06 25.82-.45 30.23-14.81-12.62-3.08-25.89 2.13-30.62 14.63-.14-.05-2.99 2.16-3.39 2.41zm4-11.47c11.29-4.1 18.66-19.08 14.18-30.43-11.57 5.57-18.21 17.95-14.18 30.43m1.12-2.34c-.43.51-.59 1.03-.81 1.37-.06-.9.15-2.02.42-2.74-.65-1.53-1.01-3.65-.86-4.68.12 1 .69 2.92 1.3 3.55.34-.82.68-1.6 1.04-2.34-.88-1.96-1.75-4.87-1.12-6.48-.24 1.71.9 3.93 1.6 5.52.45-.88.91-1.7 1.38-2.49-1.01-1.66-1.92-4.69-1.51-6.25-.08 1.48 1.15 4.3 1.99 5.44.59-.93 1.17-1.82 1.75-2.68-1-1.73-1.56-4.21-1.6-6.14.14 1.64 1.22 4.25 2.13 5.38l.47-.69.92-1.34c-.96-1.19-1.3-3.49-1.31-4.84.12 1.26.97 3.1 1.8 4.11.71-1.07 1.38-2.14 1.98-3.26-.82-.98-1.29-2.99-1.25-3.97.55 2.06 1.15 2.84 1.67 3.15.48-.99.91-2.02 1.25-3.13-.71-.96-.59-2.08-.53-3.26-.04.75.37 2.29.77 2.59.36-.81.86-2.32 1.16-3.69-.02 1.19-.69 4.47-1.18 5.84.67-.3 1.41-.82 1.82-2.06-.17 1.41-.81 2.41-1.99 2.87-.5 1.16-1.07 2.25-1.71 3.32.99-.43 2.33-1.11 3.05-1.79-.66 1.02-2.28 2.57-3.72 2.88-.46.71-.94 1.43-1.43 2.15 1.38-.27 3.35-.88 4.6-1.85-1.04 1.15-3.34 2.47-5.3 2.86-.48.7-.97 1.41-1.47 2.16 2.1-.15 3.58-.3 6.24-1.64-1.92 1.3-4.34 2.44-6.79 2.49-.5.78-1 1.59-1.5 2.45 1.02-.03 4.31-.69 5.59-1.37-1.61 1.28-4.16 1.89-6.13 2.35-.42.78-.84 1.6-1.24 2.48 1.09-.21 3.56-.86 4.86-1.78-1.26 1.22-3.43 2.17-5.31 2.8q-.345.81-.66 1.68c.54-.13 1.9-.16 3.51-1.24-.79 1.07-2.69 1.81-3.88 2.27M2.257 92.96c.15.19.52.77.68 1.07 3.66-2.6 7.39-5.01 11.16-7.43 1.37-1.25 4.69-4.69 5.75-5.79 2.41-1.13 5.85-4.33 8.02-6.09 5.81-6.08 8.33-10.09 14.97-14.48 1.71-4.5 11.69-14.1 15.3-17.96.51-1.74 1.68-5.76 4.55-10.92h-.14c-1.74 3.06-3.97 7.1-4.95 10.45-3.57 3.81-13.92 13.76-15.34 18.06-1.67 1.2-5.04 3.64-6.43 5.23-4.01 4.41-11.56 12.87-16.77 15.5-1 1.01-4.94 5.27-5.75 5.78-3.18 2.04-7.56 5.15-11.05 6.58m13.38-6.62c.66-.05 2.51-.92 4.02-1 9.73 9.27 21.53 14.53 33.41 5.18-8.66-9.75-22.56-13-33.62-5.39-.79-.28-2.93.61-3.53.94zm6.73-.85c-.37-.16-1.4-.34-1.82-.35 1.32-.37 2.37-.29 3.14-.23 1.31-1.05 2.69-1.73 4.27-2.11-.93.37-2.4 1.33-3.06 2.23.88.1 1.72.22 2.53.36 1.65-1.39 3.72-2.75 5.94-2.86-2.32.55-3.79 1.94-4.88 3.05.97.19 1.89.41 2.78.65 1.31-1.43 3.27-2.62 5.59-3.17-2.08.66-3.75 2.26-4.69 3.41 1.07.31 2.08.62 3.06.95 1.39-1.43 3.28-2.57 5.46-3.22-2.22 1.1-3.04 1.9-4.58 3.51l2.33.79c.88-1.25 2.84-2.2 4.29-2.59-1.4.59-2.72 1.62-3.46 2.86 1.23.39 2.45.74 3.69 1.01.72-1.06 2.25-1.92 3.47-2.29-1.66.89-2.46 1.98-2.57 2.47 1.08.19 2.07.4 3.23.43.73-.95 2.08-1.4 3.11-1.49-1.36.36-2.03 1.05-2.36 1.53 1.14.12 3.13.24 4 .11-1.14.36-4.33.65-5.87.49.48.58 1.11 1.08 2.36 1.07-1.3.17-2.53-.11-3.31-1.13-1.25-.15-2.46-.41-3.66-.72.29.74 1.51 2.26 3.12 2.73-1.92-.17-3.66-1.79-4.34-3.08-.82-.24-1.64-.51-2.46-.79.34 1.31 1.8 3.43 3.2 4.27-2.35-.83-3.46-2.88-4.37-4.66-.81-.27-1.63-.55-2.48-.82.39 1.61 1.61 4.18 3.29 5.55-1.93-1.16-3.55-3.51-4.26-5.85-.89-.27-1.81-.53-2.77-.77.15.9 1.54 3.75 2.85 5-1.72-.61-3.42-3.74-3.94-5.25-.87-.2-1.77-.37-2.72-.51.54 1.31 1.51 3.42 3.04 4.19-2.19-.71-3.02-2.71-4.15-4.34-.58-.07-1.18-.14-1.79-.18.15.64 1.24 2.4 2.15 3.03-1.35-.49-2.72-2.21-3.36-3.28m7.66-11.65c.45-.17 4.75-1.78 4.77-1.81 11.58 6.81 24.27 9.24 33.71-2.58-10.65-7.52-24.94-7.51-33.97 2.41-.6-.1-3.51 1.21-4.17 1.64zm7.59-2.15c-.4.08-.9.18-1.99-.04.65-.23 1.38-.31 2.99-.96 1.29-1.64 2.39-2.54 3.68-3.03-1.46.99-1.87 1.74-2.47 2.87.87-.11 1.72-.18 2.54-.23 1.29-1.72 2.92-3.65 5.13-4.13-1.73.49-3.36 2.76-4.06 4.08.99-.03 1.94-.03 2.86-.01.95-1.69 2.72-3.8 4.72-4.36-1.59.78-3.09 2.94-3.78 4.4 1.1.05 2.16.13 3.19.22 1.03-1.71 2.7-3.62 4.59-4.38-2.04 1.29-3.06 3-3.67 4.47l2.45.23c.58-1.44 2.19-3.08 3.59-3.5-1.59.9-2.32 2.45-2.72 3.57 1.29.11 2.55.17 3.82.15.47-1.2 1.57-2.43 2.86-3.02a5.38 5.38 0 0 0-1.94 2.99c1.1-.06 1.9-.05 3.04-.29.5-1.1 1.87-1.98 2.89-2.19-1.4.8-1.56 1.36-1.91 2.12.6-.13 2.78-.67 3.83-1.02-.82.62-4.01 1.7-5.45 1.94.45.38 1.34.7 2.44.51-1.02.47-2.49.47-3.47-.35-1.26.14-2.49.17-3.73.13.64.81 1.62 1.37 2.85 1.76-1.19-.07-3.16-.71-4.13-1.82q-1.275-.075-2.58-.21c.48.69 1.73 2.12 3.85 3.13-1.9-.43-3.78-1.72-5.07-3.24-.84-.08-1.71-.17-2.6-.24.67 1.22 2.31 3.54 4.46 4.66-2.3-.84-4.25-2.61-5.48-4.73-.92-.06-1.87-.1-2.87-.11.76.83 2.37 3.73 4.16 4.62-1.63-.14-4.25-3.49-5.27-4.62-.89.01-1.81.05-2.77.12.29.58 2.4 3.17 4.39 4.06-1.9-.27-4.51-2.54-5.51-3.95-.58.06-1.17.13-1.78.23.27.63 1.6 1.93 2.79 2.47-1.27-.08-2.89-1.48-3.87-2.3m-18.12 7.66c.2-.11.35-.21.51-.36.48-1.05 1.28-3.17 1.42-3.9 10.08-8.72 10.32-23.06 3.14-33.78-12.05 9.13-9.94 21.89-3.42 33.63-.08.05-1.5 3.98-1.65 4.41m2.26-8.29c.1-.61.2-1.2.27-1.78-1.27-1.49-2.36-2.65-3.17-4.89.82 1.63 2.34 3.01 3.31 3.77.09-.95.16-1.87.19-2.76-1.35-1.3-3.8-3.2-4.09-5.14 1.15 2.16 2.85 2.95 4.12 4.02.01-.99-.01-1.94-.04-2.87-2.11-1.29-3.91-3.26-4.59-5.59.99 2.15 3.22 3.84 4.54 4.57-.05-.89-.11-1.75-.17-2.6-1.5-1.34-2.72-3.37-3.12-5.15.74 2.02 2.2 3.34 3.03 3.92-.06-.87-.11-1.73-.14-2.58-1.09-1.01-1.57-2.63-1.71-4.17.34 1.42 1.12 2.58 1.69 2.9-.01-1.24.07-2.42.35-3.73-.81-1.02-.86-2.91-.39-3.48-.23.72.12 2.03.58 2.65.29-1.47 1.07-4.22 1.91-5.56-.49.93-.84 3.22-1 3.93.66-.3 1.76-1.29 2.08-2.03-.38 1.04-1.07 2.12-2.16 2.58-.22 1.13-.42 2.33-.5 3.43.39-.06 2.24-.87 3.07-2-.44 1.01-1.68 2.23-3.09 2.78-.05 1.27-.02 2.53.05 3.82 1.04-.18 2.89-1.61 3.64-2.62-.65 1.27-2.17 2.96-3.59 3.5l.17 2.45c1.65-.83 3.78-2.29 4.54-3.57-.69 1.66-2.75 3.52-4.48 4.49.07 1.04.12 2.1.15 3.2 1.55-.75 3.54-1.99 4.49-3.67-.73 1.76-2.78 3.71-4.48 4.61 0 .92-.02 1.87-.07 2.85 1.31-.79 3.24-1.9 4.09-3.98-.56 2.42-2.43 3.82-4.17 5.05-.07.82-.17 1.67-.3 2.54.78-.41 2.1-1.04 2.93-2.4-.54 1.47-1.76 2.59-3.12 3.6-.14.78-.57 2.13-1.03 2.92.19-.57.15-1.63 0-1.94-.79-.99-1.95-2.35-2.19-3.93.8 1.82 1.56 2.43 2.4 2.86m14.06-7.15.3-.29c.16-.6 1.24-3.82 1.1-3.98 10.14-8.79 10.52-23.07 3.26-33.91-12.04 9.15-9.93 21.9-3.42 33.64-.14.08-1.09 3.94-1.24 4.54m1.85-8.42c.11-.61.2-1.2.28-1.78-1.3-1.51-2.39-2.49-3.15-5.11.74 1.79 2.33 3.27 3.28 3.99.1-.95.17-1.87.2-2.76-1.34-1.29-3.5-3.38-4.09-5.14.82 1.7 3.31 3.3 4.12 4.02.01-.99-.01-1.94-.05-2.87-2.16-1.34-3.8-3.42-4.58-5.59.59 1.33 2.92 3.9 4.54 4.57-.05-.89-.11-1.75-.17-2.6-1.51-1.34-2.6-3.23-3.12-5.15.56 1.51 1.85 3.11 3.03 3.92-.06-.87-.11-1.73-.14-2.58-1.09-1-1.62-2.73-1.71-4.17.2 1.05.94 2.38 1.69 2.9-.01-1.24.05-2.47.21-3.73-.8-1.02-.8-2.86-.32-3.51-.27.66.12 2.35.58 2.46.29-1.47 1.41-4.3 2.04-5.56-.25.87-.6 2.01-.95 3.85.33-.1 1.05-.3 1.97-1.73-.3 1.03-1.03 2.08-2.12 2.54-.26 1.13-.43 2.24-.51 3.34.65-.13 1.73-.5 3.04-1.87-.6 1.13-1.89 2.35-3.09 2.78-.06 1.27-.02 2.53.05 3.82.98-.29 2.69-1.12 3.64-2.63-.77 1.63-2.17 2.96-3.59 3.51l.17 2.45c1.4-.66 3.63-2.3 4.56-3.55-.85 1.59-2.77 3.5-4.5 4.47.07 1.03.12 2.1.15 3.2 1.45-.74 3.45-1.9 4.49-3.68-.66 1.84-2.78 3.72-4.48 4.62 0 .92-.02 1.87-.08 2.85 1.16-.66 3-1.74 4.18-3.95-.36 2.19-2.51 3.79-4.25 5.02-.07.82-.17 1.67-.3 2.54.55-.24 1.78-.9 2.93-2.4-.65 1.43-1.76 2.58-3.12 3.6-.19 1.18-.48 2.16-1.09 3.1.09-.4.16-1.18.2-2.08-1.11-.77-2.24-2.69-2.33-3.97.68 1.82 2.04 2.63 2.39 2.86m6.33 4.25c.53-.21 4.22-1.58 4.3-1.81 12.67 4.41 25.62 4.3 32.56-9.11-11.91-5.3-25.92-2.5-32.84 9-.09-.06-3.43 1.44-3.84 1.6zm6.98-2.83c-.7.13-1.18.18-1.97.54.82-.72 2.06-1.32 2.78-1.58.77-1.51 1.78-2.93 3.02-3.7-.74.71-1.48 1.91-1.87 3.3.84-.27 1.66-.51 2.45-.72.92-1.94 2.04-4.12 4.23-5.05-1.96 1.2-2.73 3.29-3.18 4.79.96-.22 1.89-.41 2.79-.56.61-1.84 1.58-3.81 3.79-5.2-1.97 1.57-2.55 3.62-2.86 5.05 1.09-.16 2.15-.29 3.17-.4.67-1.88 1.85-4.03 3.65-5.2-1.42 1.25-2.45 3.49-2.72 5.1l2.44-.25c.29-1.49 1.26-3.17 2.84-4.13-1.43 1.23-1.82 2.86-1.96 4.03 1.28-.15 2.53-.33 3.77-.6.22-1.27 1.07-2.55 2.21-3.52-.89.89-1.3 2.37-1.32 3.31 1.07-.27 2.23-.54 3.29-.99.28-1.17 1.18-2.19 2.05-2.6-.69.45-1.35 1.7-1.17 2.3 1.05-.33 2.12-1 3.01-1.53-.94 1.07-2.91 2.3-4.84 2.96.28.25 1.54.39 2.61-.03-.78.71-2.34.94-3.47.33-1.2.38-2.41.65-3.63.86.46.42 1.57 1.01 3.14 1.17-1.34.16-3.23-.08-4.4-.98-.85.11-1.7.21-2.57.3.36.47 2.25 1.95 4.38 2.32-1.94-.07-4.04-.95-5.6-2.19-.85.08-1.71.17-2.6.27.66.8 2.64 2.9 5.29 3.69-2.67-.45-4.67-1.72-6.3-3.56-.92.12-1.86.26-2.84.44.34.45 3.34 3.05 4.66 3.38-1.48.04-4.55-2.25-5.75-3.16-.87.19-1.77.4-2.69.67.66.69 2.92 2.15 4.49 2.55-1.79-.1-3.86-1.21-5.57-2.23-.55.17-1.12.36-1.7.57.47.44 2.01 1.54 3.22 1.88-1.26.11-3.15-1.02-4.27-1.63m.29-9.84.33-.37.63-3.2c9.62-9.26 9.13-23.45 1.37-33.81-11.53 9.75-8.76 22.4-1.64 33.77zm1.1-7.52q.105-.93.18-1.8c-1.38-1.44-2.6-3.1-3.42-4.93 1.11 1.94 2.35 2.62 3.49 3.81.05-.96.06-1.88.05-2.77-1.4-1.18-3.75-3.18-4.36-4.91.85 1.27 2.59 2.54 4.33 3.8-.04-.99-.11-1.95-.19-2.87-2.18-1.18-3.6-3.3-4.88-5.35 1.75 2.26 2.96 3.22 4.77 4.33-.09-.88-.2-1.74-.3-2.59-1.58-1.26-2.93-3.04-3.39-4.97 1.19 2.14 2.06 2.67 3.23 3.76-.1-.87-.2-1.73-.27-2.58-1.15-.94-1.82-2.74-1.93-4.08.73 1.8 1.16 2.27 1.83 2.81-.07-1.23.05-2.57.14-3.83-.86-.99-1.07-2.5-.65-3.4-.14 1.27.46 2.16.82 2.5.21-1.49.92-4.02 1.54-5.4-.18.8-.68 3.15-.71 3.83.65-.25 1.41-1 1.96-2.09-.31.98-.96 2.18-2.03 2.7-.2 1.14-.25 2.21-.28 3.31.78-.18 1.9-.81 2.93-2.03-.52 1.01-1.75 2.45-2.94 2.94.02 1.27.12 2.53.26 3.82.99-.46 2.33-1.3 3.49-2.82-.48 1.09-2.01 3.08-3.4 3.69l.3 2.44c1.46-.99 3.4-2.35 4.37-3.79-.62 1.56-2.58 3.64-4.26 4.71.13 1.02.24 2.08.32 3.18 1.43-.94 3.49-2.43 4.28-3.9-.78 2.21-2.57 3.84-4.22 4.84.05.92.08 1.87.07 2.85 1.27-.78 3.24-2.43 3.96-4.17-.42 2.22-2.31 3.93-3.98 5.24-.02.83-.07 1.68-.16 2.56.6-.32 1.85-1.14 2.8-2.55-.29 1.1-1.61 2.66-2.93 3.75-.11.89-.34 1.97-.95 2.97.12-.91.09-1.33-.02-1.93-.84-.95-2.01-2.68-2.4-3.81.74 1.2 2.03 2.14 2.55 2.73m12.88-1.45c-.34.22-.95.51-1.81.75.9-.5 1.34-1.06 2.29-1.72.48-1.59 1.05-3.34 2.41-4.51-1.29 1.88-1.16 2.89-1.24 3.57.78-.42 1.54-.8 2.28-1.15.56-2.08 1.14-4.44 3.26-5.72-1.83 1.4-2.05 3.81-2.28 5.28.91-.4 1.79-.74 2.65-1.05.27-1.92 1.32-4.53 2.79-5.79-.94 1.26-1.74 3.84-1.9 5.47 1.05-.36 2.06-.67 3.06-.96.32-1.98.84-4.04 2.65-5.76-1.53 2.32-1.62 3.93-1.77 5.5.79-.23 1.58-.45 2.36-.69.02-1.53.97-3.6 2.05-4.57-.96 1.39-1.1 3-1.21 4.32 1.24-.38 2.44-.78 3.61-1.27-.01-1.28.77-3.26 1.55-3.86-.78 1.44-.91 2.78-.71 3.5 1-.46 2.09-1.02 3.06-1.66.06-1.21.53-2.16 1.55-2.83-.46.5-1.11 1.93-.85 2.42.66-.21 1.38-.65 2.31-1.51-.81 1.31-2.51 2.49-3.76 3.24.42.12 1.84-.03 2.58-.45-.6.72-2.14 1.35-3.36.96-1.12.59-2.25 1.07-3.42 1.49.34.29 1.85.68 3.31.58-.98.34-3.21.51-4.52-.17-.8.27-1.63.51-2.47.76.7.49 2.58 1.26 4.73 1.49-1.91.17-4.14-.21-5.91-1.15-.81.24-1.65.48-2.5.74.99 1.06 3.74 2.36 5.86 2.68-2.44.04-4.89-.85-6.83-2.38-.88.29-1.79.6-2.71.95.79.82 2.62 1.88 5.19 2.48-2.6.06-4.86-1.39-6.23-2.07-.83.34-1.66.72-2.52 1.14.57.43 3.08 1.45 4.87 1.71-2 .11-4.01-.51-5.88-1.2-.52.27-1.04.56-1.58.87.51.37 1.68 1.03 3.51 1.27-1.26.34-3.26-.3-4.47-.7"
          className="fil0"
        ></path>
      </svg>
    ),
    title: 'Flexible, by design and priority',
    href: '/why#flexible-by-design',
    description: 'From high-level design to the smallest details, Vike is built with flexibility in mind.'
  }
]

export const Flexible = () => {
  return (
    <div className={`landingpage-flexible-container`}>
      <Grid>
        <div className={`landingpage-flexible-flexbox`}>
          <div
            style={{
              flex: 1
            }}
          >
            <TextBox className={`landingpage-flexible-customTextBox`}>
              <SectionTextCollection
                style={{
                  maxWidth: '400px'
                }}
                caption={data.caption}
                title={data.title}
                descriptions={data.description}
              />
              <div style={{ paddingTop: 8, marginBottom: 23 }}>
                <Link href={'/why#architecture'}>
                  <Button type="secondary">Read Architecture</Button>
                </Link>
              </div>
            </TextBox>
          </div>
          <div
            style={{
              flex: 1
            }}
          >
            <div
              className={`landingpage-flexible-slotMachine`}
              style={{
                justifyContent: 'center'
              }}
            >
              <div className={`landingpage-flexible-slotMachineImageContainer`}>
                <Slotmachine />
              </div>
              {/*
              <div className={`landingpage-flexible-slotMachineSeparator`} />
              <div className={`landingpage-flexible-buttonWrapper`}>
                <Button type="secondary" fullWidth>
                  Spin
                </Button>
              </div>
              */}
            </div>
          </div>
        </div>
      </Grid>

      <div className={`landingpage-flexible-benefitWrapper`}>
        <Grid>
          <div className={`landingpage-flexible-benefitFlexbox`}>
            {benefits.map((benefit, i) => (
              <a key={i} className={`landingpage-flexible-benefit`} href={benefit.href}>
                <TextBox>
                  <ParagraphTextCollection
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    buttonLable="Learn More"
                  />
                </TextBox>
              </a>
            ))}
          </div>
        </Grid>
      </div>
    </div>
  )
}
