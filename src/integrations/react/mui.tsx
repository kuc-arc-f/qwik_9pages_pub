/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { Button, Slider } from "@mui/material";

export const MUIButton = qwikify$(Button);
export const MUISlider = qwikify$(Slider, { eagerness: "hover" });

export const TableApp = qwikify$(() => {
  return (
    <>
      <h1>Hello from React</h1>
      <div style={{ height: 400, width: "100%" }}>
      </div>
    </>
  );
});
