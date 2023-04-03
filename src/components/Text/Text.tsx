import { ComponentProps } from "react";
import { FontSizeTokens, styled, theme } from "stitches.config";

const size = Object.keys(theme.fontSizes).reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: {
      fontSize: `$${curr}`,
      lineHeight: `$${curr}`,
    },
  }),
  {} as Record<
    FontSizeTokens,
    { fontSize: `$${FontSizeTokens}`; lineHeight: `$${FontSizeTokens}` }
  >
);

export const Text = styled("span", {
  fontWeight: "$regular",
  margin: 0,
  fontVariantNumeric: "tabular-nums",
  display: "inline-block",
  variants: {
    size,
    color: {
      primary: {
        color: "$text-primary",
      },
      secondary: {
        color: "$text-secondary",
      },
    },
    weight: {
      regular: {
        fontWeight: "$regular",
      },
      bold: {
        fontWeight: "$bold",
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    truncate: {
      true: {
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },
    underline: {
      true: {
        textDecoration: "underline",
      },
    },
  },
  defaultVariants: {
    size: "body-s",
    color: "primary",
    weight: "regular",
  },
});

Text.displayName = "Text";

export type TextProps = ComponentProps<typeof Text>;
