import * as React from 'react';

function SvgFacebook(props) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <svg
      className="facebook_svg__icon"
      viewBox="0 0 1024 1024"
      width={200}
      height={200}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <defs>
        <style />
      </defs>
      <path
        d="M933.8 195.213c0-58.296-47.259-105.554-105.554-105.554h-633.12c-58.296 0-105.554 47.258-105.554 105.554v633.12c0 58.295 47.258 105.554 105.554 105.554h633.12c58.295 0 105.554-47.259 105.554-105.554v-633.12zM776.21 300.46H669.787v105.4H776.21v105.401H669.787v317.225h-105.4V511.261H458.985v-105.4h105.4V267.9c0-35.433 39.029-72.84 78.785-72.84h133.04v105.4z"
        fill="#425F9B"
      />
    </svg>
  );
}

export default SvgFacebook;
