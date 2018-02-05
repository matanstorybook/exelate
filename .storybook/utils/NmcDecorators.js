import React from 'react'

const wrapperDecoratorStyles = {
  margin: '60px 20px 10px 30px',
  width: '80%'
};
export const WrapperDecorator = (storyFn) => (
  <div style={wrapperDecoratorStyles}>
    { storyFn() }
  </div>
);