import { BadgeDelta } from '@tremor/react';
  
export function BadgeTrue() {
  return (
        <div className="flex flex-wrap items-center">
          <BadgeDelta>
            Investments
          </BadgeDelta>

        </div>
  );
}

export function BadgePlus() {
  return (
        <div className="flex flex-wrap items-center mr-5">
          <BadgeDelta>
           
          </BadgeDelta>
        </div>
  );
}