
  
  import { BadgeDelta } from '@tremor/react';
  
  export function BadgeFalse() {
    return (
          <div className="flex flex-wrap items-center">
            <BadgeDelta deltaType="decrease" isIncreasePositive={true}>
              Leisure
            </BadgeDelta>
          </div>
    );
  }

  export function BadgeMinus() {
    return (
          <div className="flex flex-wrap items-center mr-5">
            <BadgeDelta deltaType="decrease" isIncreasePositive={true}>
             
            </BadgeDelta>
          </div>
    );
  }