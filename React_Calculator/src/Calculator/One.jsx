import React, { useState } from 'react';
import Display from './Display';

function One(props) {
  const [num, setNum] = useState(0);
  const [isDisplayHidden, setIsDisplayHidden] = useState(true);

  const digit_clicked = (mydata) => {
    setNum(mydata);
    // Show the Display component when data is received
    setIsDisplayHidden(false);
  };

  const hideDisplay = () => {
    // Hide the Display component
    setIsDisplayHidden(true);
  };

  return (
    <>
      <div>
        <button onClick={() => digit_clicked(props.digit)} className="h-10 w-10 p-4 border-4">
          {props.digit}
        </button>
      </div>

      {/* Conditionally render Display based on the isDisplayHidden flag */}
      {!isDisplayHidden && <Display digit={num} onHide={hideDisplay} />}
    </>
  );
}

export default One;
