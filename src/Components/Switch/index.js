import React, { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
// import { motion } from 'framer-motion';

export default Switch = () => {
  const [state, setState] = useState(false);
  const handleOnTap = () => {
    setState(!state);
  };
  return (
    <div
      className='container'
      css={css`
        width: 100px;
        height: 50px;
        background: red;
        border-radius: 50px;
        position: relative;
      `}
      onClick={handleOnTap}
    >
      <div
        className='ball'
        css={css`
          width: 50px;
          height: 50px;
          background: green;
          border-radius: 50%;
          position: absolute;
          left: ${state ? 'unset' : 0};
          right: ${state ? 0 : 'unset'};
          transition: all ease 1s;
        `}
      ></div>
    </div>
  );
};
