import { ReactElement, useState } from 'react';

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i; // don't go past the last step
      return i + 1; // otherwise, go to the next step
    });
  }

  function previousStep() {
    setCurrentStepIndex((i) => {
      if (i >= 0) return i; // don't go past the first step
      return i - 1; // otherwise, go to the previous step
    });
  }

  function goToStep(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goToStep,
    nextStep,
    previousStep,
  };
}
