import { cloneElement } from "react";

export const Nest = ({ elements, children }) =>
  elements.reduceRight(
    (out, element) => cloneElement(element, {}, out),
    <>{children}</>
  );
