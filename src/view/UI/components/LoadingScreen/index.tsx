import { FC } from "react";

/**
 * Данная верстка полностью идентична с версткой в файле public/index.html
 * Если что-то поменяется, то нужно менять в обоих местах.
 */
export const LoadingScreen: FC = () => (
  <div id="loading-dots__wrapper">
    <div id="loading-dots">
      <div className="title">Yul</div>
      <div className="title subtitle">Yort</div>
      <div className="dot first-dots" />
      <div className="dot second-dots" />
      <div className="dot third-dots" />
    </div>
  </div>
);
