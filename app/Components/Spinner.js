import React from 'react';

const Spinner = () => {
  return (
    // Container div to center the spinner
    <div className="flex justify-center items-center h-screen">
      {/* Spinner div */}
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-spin"
        role="status"
      >
        {/* Accessibility span for screen readers */}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
