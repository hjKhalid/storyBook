import React from "react";
import PropTypes from "prop-types";
import "./progressStep.css"; // Import CSS file for styling

const ProgressStep = ({ steps, currentStep, direction, backgroundColor }) => {
  const renderSteps = () => {
    return steps.map((step, index) => {
      const stepClass = index === currentStep ? "step active" : "step";
      return (
        <>
          <div key={index}>
            <div style={{display:"flex"}}>
              <div
                style={backgroundColor && { backgroundColor }}
                className={stepClass}
              >
                {step.step}
              </div>
              <p>--------</p>
            </div>
            <div>{step.description}</div>{" "}
          </div>
        </>
      );
    });
  };

  return <div className={`progress-step ${direction}`}>{renderSteps()} </div>;
};

ProgressStep.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
  direction: PropTypes.oneOf(["horizontal", "vertical"]).isRequired,
  backgroundColor: PropTypes.string,
};

ProgressStep.defaultProps = {
  direction: "vertical",
};

export default ProgressStep;
