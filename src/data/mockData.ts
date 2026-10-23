export const metrics = [
  { title: "MRR", value: "$42,500", change: 8.4 },
  { title: "Active Users", value: "12,450", change: 5.2 },
  { title: "Churn Rate", value: "1.2%", change: -0.3 },
  { title: "ARPU", value: "$85", change: 2.1 },
];

export const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 14500 },
  { month: "Mar", revenue: 13800 },
  { month: "Apr", revenue: 17200 },
  { month: "May", revenue: 19600 },
  { month: "Jun", revenue: 21400 },
  { month: "Jul", revenue: 24100 },
  { month: "Aug", revenue: 23300 },
  { month: "Sep", revenue: 28700 },
  { month: "Oct", revenue: 33200 },
  { month: "Nov", revenue: 37900 },
  { month: "Dec", revenue: 42500 },
];

export const transactions = [
  { id: "1", customer: "Northwind Labs", plan: "Enterprise", amount: 4200, date: "Oct 22", status: "Paid" },
  { id: "2", customer: "Acme Robotics", plan: "Growth", amount: 890, date: "Oct 21", status: "Paid" },
  { id: "3", customer: "Halcyon Health", plan: "Growth", amount: 890, date: "Oct 20", status: "Pending" },
  { id: "4", customer: "Brightpath Media", plan: "Starter", amount: 149, date: "Oct 19", status: "Paid" },
  { id: "5", customer: "Orbital Freight", plan: "Enterprise", amount: 3600, date: "Oct 18", status: "Refunded" },
];

export const funnel = [
  { stage: "Visitors", value: 48200, percent: 100 },
  { stage: "Trial Signups", value: 6260, percent: 13 },
  { stage: "Paid Conversions", value: 1150, percent: 2.4 },
];

export const customers = [
  { id: "1", name: "Northwind Labs", email: "billing@northwind.io", plan: "Enterprise", mrr: 4200, status: "Active" },
  { id: "2", name: "Acme Robotics", email: "ops@acmerobotics.com", plan: "Growth", mrr: 890, status: "Active" },
  { id: "3", name: "Halcyon Health", email: "finance@halcyon.health", plan: "Growth", mrr: 890, status: "Trial" },
  { id: "4", name: "Brightpath Media", email: "hello@brightpath.co", plan: "Starter", mrr: 149, status: "Active" },
  { id: "5", name: "Orbital Freight", email: "ap@orbitalfreight.com", plan: "Enterprise", mrr: 3600, status: "Churned" },
];

export const invoices = [
  { id: "INV-2026-010", date: "Oct 1, 2026", amount: 499, status: "Paid" },
  { id: "INV-2026-009", date: "Sep 1, 2026", amount: 499, status: "Paid" },
  { id: "INV-2026-008", date: "Aug 1, 2026", amount: 399, status: "Paid" },
];
