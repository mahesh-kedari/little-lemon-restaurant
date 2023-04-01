/**
 * Home Page
 * @author kedari.mahesh@gmail.com
 */
import React from 'react'
import About from '../sections/AboutSection';
import Heading from '../sections/HomeHeading';
import Specials from '../sections/Specials';

type Props = {}

export default function Home({}: Props) {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <About />
      </main>
    </>
  );
}