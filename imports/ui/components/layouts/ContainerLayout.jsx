import React, { Component } from 'react';
import Header from '/imports/ui/components/Header.jsx';



export const ContainerLayout = ({content}) => (
  <div className="container-fluid">
    <Header />
    {content}
  </div>
)
