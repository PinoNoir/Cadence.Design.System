import React from 'react';
import { useAutomationId } from '../utilities/use-automation-id';

// Define a mapped type to add "automation-id" to the props
type WithAutomationId<P> = P & {
  'automation-id'?: string;
  automationId?: string;
};

// A separate component that uses the useAutomationId hook
const WithAutomationIdWrapper: React.FC<WithAutomationId<any>> = ({ automationId, ...props }) => {
  const autoId = useAutomationId(automationId);
  return <div {...props} automation-id={autoId} />;
};

// inject static values to a component so that they're always provided
function withAutomationId<P>(WrappedComponent: React.ComponentType<P>) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  // Return a functional component
  const WrappedWithAutomationId: React.FC<P> = (props) => {
    return (
      <WithAutomationIdWrapper>
        <WrappedComponent {...props} />
      </WithAutomationIdWrapper>
    );
  };

  WrappedWithAutomationId.displayName = `${displayName} withId`;
  return WrappedWithAutomationId;
}

export default withAutomationId;
