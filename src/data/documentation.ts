import { Rocket, Layers, Code, Cpu, Zap, ShieldCheck } from "lucide-react";

export const DOCS_GROUPS = [
  {
    title: "Getting Started",
    icon: Rocket,
    items: [
      { label: "Quickstart Guide", href: "#" },
      { label: "Installation", href: "#" },
      { label: "Lab Interface Overview", href: "#" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Layers,
    items: [
      { label: "The Neural Editor", href: "#" },
      { label: "Predictive Terminal", href: "#" },
      { label: "Context Engine", href: "#" },
    ],
  },
  {
    title: "Advanced API",
    icon: Code,
    items: [
      { label: "Authentication", href: "#" },
      { label: "Webhooks", href: "#" },
      { label: "Custom Plugins", href: "#" },
    ],
  },
  {
    title: "System Design",
    icon: Cpu,
    items: [
      { label: "Architecture", href: "#" },
      { label: "Security & Privacy", href: "#" },
      { label: "Performance Specs", href: "#" },
    ],
  },
  {
    title: "Integrations",
    icon: Zap,
    items: [
      { label: "VS Code Plugin", href: "#" },
      { label: "IntelliJ Setup", href: "#" },
      { label: "CLI Interface", href: "#" },
    ],
  },
  {
    title: "Legal & Compliance",
    icon: ShieldCheck,
    items: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Data Management", href: "#" },
    ],
  },
];
