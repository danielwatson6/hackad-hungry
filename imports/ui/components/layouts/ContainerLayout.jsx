import React, { Component } from 'react';
import Navigation from '/imports/ui/components/Navigation.jsx';



export const ContainerLayout = ({content}) => (
  <div>
    <Navigation />
    {content}
  </div>
)
