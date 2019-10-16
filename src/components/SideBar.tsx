import "./SideBar.css";

import React from "react";

export interface ColorConfig {
  readonly inkColor: string;
  readonly accentColor: string;
  readonly backgroundColor: string;
}

export interface Props {
  readonly options: Array<ColorConfig>;
  readonly selectedIndex?: number;
  readonly onSelect: (index: number) => void;
  readonly onDownloadPack: () => void;
}

const SideBar: React.FC<Props> = props => {
  const { options, selectedIndex, onSelect, onDownloadPack } = props;
  return (
    <div className="SideBar">
      <h1 className="SideBar-logo">Open Doodles</h1>
      <div className="SideBar-theme-container">
        <div className="SideBar-theme-header">
          <div className="tabs-menu w-tab-menu">
            <a className="tab w-inline-block w-tab-link w--current">
              <div>Theme</div>
            </a>
            <a className="tab w-inline-block w-tab-link">
              <div>Create</div>
            </a>
          </div>
        </div>
        <div className="SideBar-theme-grid">
          {options.map((config, index) => {
            return (
              <div
                key={index}
                className="SideBar-option-block"
                style={{
                  ...(index === selectedIndex ? { borderColor: "black" } : {})
                }}
                onClick={() => onSelect(index)}
              >
                <div
                  className="SideBar-option"
                  style={{ backgroundColor: config.inkColor }}
                />
                <div
                  className="SideBar-option"
                  style={{ backgroundColor: config.accentColor }}
                />
                <div
                  className={
                    config.backgroundColor === "#FFFFFF00"
                      ? "SideBar-option checkerboard-bg"
                      : "SideBar-option"
                  }
                  style={{ backgroundColor: config.backgroundColor }}
                />
              </div>
            );
          })}
        </div>
        <button
          className="SideBar-button SideBar-w-button"
          onClick={event => {
            onDownloadPack();
            event.preventDefault();
          }}
        >
          Download Pack
        </button>
        <div className="SideBar-source-block">
          <a href="#">
            <img
              className="logo"
              src="studio-logo.svg"
              alt="Studio file logo"
            />
            <span className="link">Studio File</span>
          </a>
          <a href="#">
            <img className="logo" src="sketch-logo.png" alt="Sketch file log" />
            <span className="link">Sketch File</span>
          </a>
        </div>
      </div>
      <div className="SideBar-author-block">
        <a href="https://twitter.com/pablostanley">
          <img src="icon-design.svg" alt="Design icon" />
          <span className="link">Pablo Stanley</span>
        </a>
        <a href="https://twitter.com/fangpenlin">
          <img src="icon-code.svg" alt="Code icon" />
          <span className="link">Fang-Pen Lin</span>
        </a>
      </div>
    </div>
  );
};
export default SideBar;
