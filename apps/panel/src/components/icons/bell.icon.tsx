import * as React from "react"
import { SVGProps } from "react"
export const BellIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#2A1544"
      d="M20.271 16.564 19.1 14.878a1.372 1.372 0 0 1-.247-.782v-4.84a6.856 6.856 0 1 0-13.712 0v4.84c0 .28-.086.553-.246.782L3.72 16.564a1.371 1.371 0 0 0 1.015 2.29h3.9a3.428 3.428 0 0 0 6.72 0h3.9a1.371 1.371 0 0 0 1.015-2.29Zm-8.275 3.661a2.057 2.057 0 0 1-1.933-1.37h3.867a2.057 2.057 0 0 1-1.934 1.37Zm-7.26-2.742a.553.553 0 0 0 .082-.096l1.2-1.728c.32-.458.492-1.004.494-1.563v-4.84a5.485 5.485 0 0 1 10.969 0v4.84c.001.56.174 1.105.494 1.563l1.2 1.728a.554.554 0 0 0 .082.096H4.736Z"
    />
    <circle cx={17.2} cy={4.2} r={3.3} fill="#FF3E3E" stroke="#F4F2FA" />
  </svg>
);
