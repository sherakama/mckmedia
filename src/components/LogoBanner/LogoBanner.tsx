import React from 'react';
import { Container } from '../Container';

export const LogoBanner = () => {
  return (
    <div className="tbg-carbon-fibre-blue">
      <Container center className="text-center">
        <h1 className="text-[8rem] text-white font-lobster text-shadow tracking-wide">McKMedia</h1>
        <p className="font-lobster text-[1.75rem] pb-8 text-white text-shadow-2 tracking-wider"><span className="text-green-500">Open.</span> For business</p>
      </Container>
    </div>
  )
}