"use client";
import { useTheme } from 'next-themes'
import React from 'react'
import D3WordCloud from 'react-d3-cloud'
type Props = {}
const data = [
    {text: "React", value: 10},
    {text: "Node js", value: 22},
    {text: "Next js", value: 33},
    {text: "Tailwind css", value: 4},
    {text: "Prisma ORM", value: 5},
    {text: "Planetscale", value: 11},
    {text: "SQL", value: 7},
    {text: "Solidity", value: 8},
    {text: "Hardhat", value: 9},
]

// const fontSizeMapper = (word: {value: number}) => {
//     return Math.log2(word.value) * 5 +16;
// }
const fontSizeMapper = (word: {value: number}) => {
    return Math.sin(word.value) * 10 + Math.pow(word.value, 0.5) * 10;
  }
    
const CustomWordCloud = (props: Props) => {
    const theme = useTheme()
  return (
    <>
    <D3WordCloud  height={550} data={data} font="Times" fontSize={fontSizeMapper} rotate={0} padding={10} fill= {theme.theme == "dark" ? "white": "black"}/>
    </>
  )
}

export default CustomWordCloud