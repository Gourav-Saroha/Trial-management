import { Role } from "./interface";

export const members: Record<Role, { name: string; email: string }[]> = {
  "System Admin": [
    { name: "Alice Johnson", email: "alice.johnson@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
    { name: "Bob Smith", email: "bob.smith@example.com" },
  ],
  "Field Admin": [
    { name: "Wade Warren", email: "wadew@landolakes.com" },
    { name: "Cameron Williamson", email: "cameronw@landolakes.com" },
  ],
  "Field Associate": [
    { name: "Jerome Bell", email: "jeromeb@landolakes.com" },
    { name: "Arlene McCoy", email: "amccoy@landolakes.com" },
  ],
  Reporting: [
    { name: "David Taylor", email: "david.taylor@example.com" },
    { name: "Emily Davis", email: "emily.davis@example.com" },
  ],
};

export const roles: Role[] = [
  "System Admin",
  "Field Admin",
  "Field Associate",
  "Reporting",
];

export const rows = [
  {
    id: 1,
    trial: "Trial 1",
    location: "Menomonie, WI",
    randomization: "RCB",
    replications: 3,
    products: 10,
    status: "In progress",
  },
  {
    id: 2,
    trial: "Trial 2",
    location: "Downsville, WI",
    randomization: "RCB with nesting",
    replications: 4,
    products: 8,
    status: "Completed",
  },
  {
    id: 3,
    trial: "Trial 3",
    location: "Menomonie, WI",
    randomization: "RCB",
    replications: 2,
    products: 5,
    status: "Not Started",
  },
  {
    id: 4,
    trial: "Trial 4",
    location: "Downsville, WI",
    randomization: "RCB with nesting",
    replications: 5,
    products: 12,
    status: "Blessed",
  },
];
