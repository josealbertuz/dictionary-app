import { ComponentProps, useId } from "react";
import {
  SwitchInput,
  Toggle,
  SwitchRoot,
  SwitchInputRoot,
} from "./Switch.styles";

type SwitchLabel =
  | { label: string; "aria-label"?: never }
  | { label?: never; "aria-label": string };

type SwitchProps = ComponentProps<typeof SwitchInput> & SwitchLabel;

export const Switch = ({ label, checked, disabled, ...rest }: SwitchProps) => {
  const id = useId();

  return (
    <SwitchInputRoot>
      <SwitchRoot>
        <SwitchInput
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          {...rest}
        />
        <Toggle />
      </SwitchRoot>
      {label && <label htmlFor={id}>{label}</label>}
    </SwitchInputRoot>
  );
};
