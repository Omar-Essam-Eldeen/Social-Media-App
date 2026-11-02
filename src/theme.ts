import { createTheme, type CSSVariablesResolver } from "@mantine/core";

// Glass theme — the locked design direction (Oct 24): full 3D / cinematic / glassy.
// Tokens come from the Glass Theme Spec. Mantine supplies components and the
// colour-scheme system; the translucency itself lives in src/styles/glass.css.
export const theme = createTheme({
  primaryColor: "brand",
  primaryShade: { light: 6, dark: 5 },
  colors: {
    brand: [
      "#f4f1ff",
      "#e9e2ff",
      "#d3c6ff",
      "#b7a2ff",
      "#9a7bff",
      "#8b5cf6",
      "#7c4de8",
      "#6d3fd1",
      "#5b34b0",
      "#4a2c8f",
    ],
  },
  fontFamily: '"Manrope", system-ui, sans-serif',
  headings: {
    fontFamily: '"Sora", system-ui, sans-serif',
    fontWeight: "700",
  },
  radius: { xs: "8px", sm: "12px", md: "16px", lg: "22px", xl: "28px" },
  defaultRadius: "md",
  shadows: {
    md: "var(--glass-shadow)",
    lg: "var(--glass-shadow)",
    xl: "var(--glass-shadow)",
  },
  cursorType: "pointer",
  components: {
    // The main bridge: every Card / Paper becomes a glass panel.
    Card: {
      defaultProps: { radius: "lg" },
      classNames: { root: "glass-card" },
    },
    Paper: {
      defaultProps: { radius: "lg" },
      classNames: { root: "glass-card" },
    },
    Avatar: {
      defaultProps: { radius: "xl" },
    },
    // Field recipe: field fill + glass border + md radius.
    // Focus border colour lives in glass.css (Mantine class selectors).
    TextInput: {
      styles: {
        input: {
          background: "var(--glass-field)",
          border: "1px solid var(--glass-border)",
          borderRadius: "var(--mantine-radius-md)",
          color: "var(--mantine-color-text)",
        },
      },
    },
    Textarea: {
      styles: {
        input: {
          background: "var(--glass-field)",
          border: "1px solid var(--glass-border)",
          borderRadius: "var(--mantine-radius-md)",
          color: "var(--mantine-color-text)",
        },
      },
    },
    PasswordInput: {
      styles: {
        input: {
          background: "var(--glass-field)",
          border: "1px solid var(--glass-border)",
          borderRadius: "var(--mantine-radius-md)",
          color: "var(--mantine-color-text)",
        },
      },
    },
    FileInput: {
      styles: {
        input: {
          background: "var(--glass-field)",
          border: "1px solid var(--glass-border)",
          borderRadius: "var(--mantine-radius-md)",
          color: "var(--mantine-color-text)",
        },
      },
    },
  },
});

export const glassVariables: CSSVariablesResolver = () => ({
  variables: {
    "--accent-grad": "linear-gradient(120deg, #8b5cf6 0%, #6366f1 45%, #22d3ee 110%)",
  },
  dark: {
    "--glass": "rgba(20, 14, 44, 0.52)",
    "--glass-strong": "rgba(24, 17, 52, 0.72)",
    "--glass-soft": "rgba(255, 255, 255, 0.055)",
    "--glass-border": "rgba(255, 255, 255, 0.13)",
    "--glass-edge": "rgba(255, 255, 255, 0.28)",
    "--glass-field": "rgba(255, 255, 255, 0.07)",
    "--glass-chip": "rgba(255, 255, 255, 0.08)",
    "--glass-bar": "rgba(10, 6, 28, 0.60)",
    "--glass-pop": "rgba(23, 15, 50, 0.94)",
    "--glass-hover": "rgba(255, 255, 255, 0.08)",
    "--glass-divider": "rgba(255, 255, 255, 0.09)",
    "--glass-shadow":
      "0 24px 48px -16px rgba(2,0,16,0.75), 0 4px 14px rgba(2,0,16,0.40)",
    "--bg-0": "#05030d",
    "--bg-1": "#0b0620",
    "--tag-color": "#22d3ee",
    "--orb-a": "0.55",
    "--orb-b": "0.40",
    "--orb-c": "0.28",
    "--vignette":
      "radial-gradient(120% 90% at 50% 40%, transparent 55%, rgba(3, 0, 14, 0.38) 100%)",
  },
  light: {
    "--glass": "rgba(255, 255, 255, 0.50)",
    "--glass-strong": "rgba(255, 255, 255, 0.78)",
    "--glass-soft": "rgba(255, 255, 255, 0.45)",
    "--glass-border": "rgba(255, 255, 255, 0.75)",
    "--glass-edge": "rgba(255, 255, 255, 0.95)",
    "--glass-field": "rgba(255, 255, 255, 0.55)",
    "--glass-chip": "rgba(255, 255, 255, 0.55)",
    "--glass-bar": "rgba(250, 249, 255, 0.62)",
    "--glass-pop": "rgba(252, 251, 255, 0.95)",
    "--glass-hover": "rgba(80, 60, 180, 0.07)",
    "--glass-divider": "rgba(60, 40, 140, 0.10)",
    "--glass-shadow":
      "0 24px 44px -18px rgba(76,52,160,0.35), 0 4px 14px rgba(76,52,160,0.12)",
    "--bg-0": "#e9eafc",
    "--bg-1": "#f6eafd",
    "--tag-color": "#6d28d9",
    "--orb-a": "0.50",
    "--orb-b": "0.45",
    "--orb-c": "0.35",
    "--vignette":
      "radial-gradient(120% 90% at 50% 40%, transparent 60%, rgba(90, 70, 180, 0.14) 100%)",
  },
});
