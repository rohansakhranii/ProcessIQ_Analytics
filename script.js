const dashboards = {
  sales: {
    kicker: "Sales dashboard selected",
    title: "Sales, revenue, and product growth in one reporting view",
    filterLabel: "Product",
    chartTitle: "Sales and revenue trend",
    tableTitle: "Year on year growth",
    tableSubtitle: "By reporting year",
    tableHeads: ["Year", "Revenue", "YoY"],
    metricLabels: ["Total revenue", "Total sales", "Best month"],
    metricTwoNote: "units sold",
    valuePrefix: "$",
    valueSuffix: "",
    barLabel: "Sales",
    lineLabel: "Revenue",
    options: ["All products", "Insight Hub", "Revenue Lens", "Ops Pulse"],
    rows: [
      { month: "Jan", segment: "Insight Hub", count: 118, value: 64800 },
      { month: "Feb", segment: "Revenue Lens", count: 132, value: 72100 },
      { month: "Mar", segment: "Ops Pulse", count: 126, value: 69400 },
      { month: "Apr", segment: "Insight Hub", count: 151, value: 85900 },
      { month: "May", segment: "Revenue Lens", count: 148, value: 83200 },
      { month: "Jun", segment: "Ops Pulse", count: 166, value: 96500 },
      { month: "Jul", segment: "Insight Hub", count: 177, value: 104300 },
      { month: "Aug", segment: "Revenue Lens", count: 184, value: 111900 },
      { month: "Sep", segment: "Ops Pulse", count: 191, value: 119600 },
      { month: "Oct", segment: "Insight Hub", count: 206, value: 132400 },
      { month: "Nov", segment: "Revenue Lens", count: 214, value: 140800 },
      { month: "Dec", segment: "Ops Pulse", count: 231, value: 156200 }
    ],
    table: [
      { period: "2022", value: 742000, change: 11 },
      { period: "2023", value: 884000, change: 19 },
      { period: "2024", value: 1064000, change: 20 },
      { period: "2025", value: 1237000, change: 16 }
    ]
  },
  consumption: {
    kicker: "Consumption dashboard selected",
    title: "Usage, repeat consumption, and customer activity in one view",
    filterLabel: "Service line",
    chartTitle: "Consumption and usage trend",
    tableTitle: "Quarterly usage growth",
    tableSubtitle: "Active consumption patterns",
    tableHeads: ["Quarter", "Usage", "Growth"],
    metricLabels: ["Total usage", "Active accounts", "Peak month"],
    metricTwoNote: "active accounts",
    valuePrefix: "",
    valueSuffix: " hrs",
    barLabel: "Accounts",
    lineLabel: "Usage",
    options: ["All service lines", "BI Reports", "Data Cleaning", "Automation"],
    rows: [
      { month: "Jan", segment: "BI Reports", count: 72, value: 1680 },
      { month: "Feb", segment: "Data Cleaning", count: 81, value: 1920 },
      { month: "Mar", segment: "Automation", count: 87, value: 2140 },
      { month: "Apr", segment: "BI Reports", count: 96, value: 2360 },
      { month: "May", segment: "Data Cleaning", count: 101, value: 2520 },
      { month: "Jun", segment: "Automation", count: 118, value: 2860 },
      { month: "Jul", segment: "BI Reports", count: 123, value: 3110 },
      { month: "Aug", segment: "Data Cleaning", count: 129, value: 3290 },
      { month: "Sep", segment: "Automation", count: 137, value: 3540 },
      { month: "Oct", segment: "BI Reports", count: 146, value: 3820 },
      { month: "Nov", segment: "Data Cleaning", count: 151, value: 3960 },
      { month: "Dec", segment: "Automation", count: 163, value: 4280 }
    ],
    table: [
      { period: "Q1", value: 5740, change: 13 },
      { period: "Q2", value: 7740, change: 18 },
      { period: "Q3", value: 9940, change: 22 },
      { period: "Q4", value: 12060, change: 21 }
    ]
  },
  social: {
    kicker: "Instagram & WhatsApp analysis selected",
    title: "Campaign reach, conversations, and engagement analytics",
    filterLabel: "Channel",
    chartTitle: "Engagement and conversation trend",
    tableTitle: "Campaign performance",
    tableSubtitle: "By campaign wave",
    tableHeads: ["Campaign", "Engagement", "Lift"],
    metricLabels: ["Total engagement", "Conversations", "Best month"],
    metricTwoNote: "qualified chats",
    valuePrefix: "",
    valueSuffix: "",
    barLabel: "Chats",
    lineLabel: "Engagement",
    options: ["All channels", "Instagram", "WhatsApp", "Reels"],
    rows: [
      { month: "Jan", segment: "Instagram", count: 430, value: 8200 },
      { month: "Feb", segment: "WhatsApp", count: 520, value: 9100 },
      { month: "Mar", segment: "Reels", count: 610, value: 11700 },
      { month: "Apr", segment: "Instagram", count: 640, value: 12600 },
      { month: "May", segment: "WhatsApp", count: 720, value: 13900 },
      { month: "Jun", segment: "Reels", count: 810, value: 15800 },
      { month: "Jul", segment: "Instagram", count: 870, value: 17100 },
      { month: "Aug", segment: "WhatsApp", count: 930, value: 18300 },
      { month: "Sep", segment: "Reels", count: 990, value: 20400 },
      { month: "Oct", segment: "Instagram", count: 1080, value: 22100 },
      { month: "Nov", segment: "WhatsApp", count: 1160, value: 23800 },
      { month: "Dec", segment: "Reels", count: 1280, value: 26600 }
    ],
    table: [
      { period: "Launch", value: 29000, change: 18 },
      { period: "Festive", value: 43800, change: 27 },
      { period: "Retarget", value: 55800, change: 21 },
      { period: "Referral", value: 72500, change: 30 }
    ]
  },
  leads: {
    kicker: "Leads analysis dashboard selected",
    title: "Lead source, funnel conversion, and pipeline visibility",
    filterLabel: "Lead source",
    chartTitle: "Lead volume and pipeline value trend",
    tableTitle: "Funnel conversion",
    tableSubtitle: "By sales stage",
    tableHeads: ["Stage", "Pipeline", "Conv."],
    metricLabels: ["Pipeline value", "Total leads", "Best month"],
    metricTwoNote: "captured leads",
    valuePrefix: "$",
    valueSuffix: "",
    barLabel: "Leads",
    lineLabel: "Pipeline",
    options: ["All sources", "Website", "Meta Ads", "Referral"],
    rows: [
      { month: "Jan", segment: "Website", count: 86, value: 42000 },
      { month: "Feb", segment: "Meta Ads", count: 102, value: 48600 },
      { month: "Mar", segment: "Referral", count: 94, value: 51200 },
      { month: "Apr", segment: "Website", count: 119, value: 63800 },
      { month: "May", segment: "Meta Ads", count: 127, value: 70200 },
      { month: "Jun", segment: "Referral", count: 138, value: 78400 },
      { month: "Jul", segment: "Website", count: 146, value: 85200 },
      { month: "Aug", segment: "Meta Ads", count: 153, value: 91800 },
      { month: "Sep", segment: "Referral", count: 161, value: 98600 },
      { month: "Oct", segment: "Website", count: 174, value: 108300 },
      { month: "Nov", segment: "Meta Ads", count: 188, value: 121400 },
      { month: "Dec", segment: "Referral", count: 203, value: 137900 }
    ],
    table: [
      { period: "Captured", value: 658000, change: 100 },
      { period: "Qualified", value: 472000, change: 72 },
      { period: "Proposal", value: 286000, change: 43 },
      { period: "Won", value: 168000, change: 26 }
    ]
  }
};

let activeDashboard = "sales";
let activeSopStep = 0;

const sopSteps = [
  {
    number: "01",
    title: "Requirement Gathering",
    mode: "notes",
    text: "We sit with your team to understand business goals, current reports, available data sources, decision makers, and the exact questions the dashboard must answer."
  },
  {
    number: "02",
    title: "Stakeholder Sign-off",
    mode: "people",
    text: "We refine the requirement with stakeholders so KPIs, filters, user roles, business definitions, and success criteria are agreed before build work starts."
  },
  {
    number: "03",
    title: "Resource Finalization",
    mode: "resource",
    text: "We confirm data access, tools, timelines, technical owners, review cadence, and delivery responsibilities so the execution path is clear."
  },
  {
    number: "04",
    title: "Commercial Finalization",
    mode: "quote",
    text: "Scope, quote, commercials, milestones, and approval checkpoints are locked so the project remains transparent from day one."
  },
  {
    number: "05",
    title: "Prototype Generation",
    mode: "prototype",
    text: "We create the first interactive version with core KPIs, sample visuals, page navigation, filters, and reporting logic."
  },
  {
    number: "06",
    title: "Prototype Finalization",
    mode: "approval",
    text: "Feedback is incorporated, calculations are validated, visual hierarchy is polished, and the approved dashboard is readied for launch."
  },
  {
    number: "07",
    title: "Final Project Closure",
    mode: "closure",
    text: "We complete handover, documentation, access checks, training notes, and final confirmation that the delivered analytics suite is ready."
  }
];

const convertBtn = document.querySelector("#convertBtn");
const productFilter = document.querySelector("#productFilter");
const dashboard = document.querySelector("#dashboard");
const dashboardKicker = document.querySelector("#dashboardKicker");
const dashboardTitle = document.querySelector("#dashboardTitle");
const dashboardTabs = document.querySelector("#dashboardTabs");
const filterLabel = document.querySelector("#filterLabel");
const metricOneLabel = document.querySelector("#metricOneLabel");
const metricTwoLabel = document.querySelector("#metricTwoLabel");
const metricTwoNote = document.querySelector("#metricTwoNote");
const metricThreeLabel = document.querySelector("#metricThreeLabel");
const revenueKpi = document.querySelector("#revenueKpi");
const revenueDelta = document.querySelector("#revenueDelta");
const salesKpi = document.querySelector("#salesKpi");
const bestMonth = document.querySelector("#bestMonth");
const bestMonthValue = document.querySelector("#bestMonthValue");
const growthRows = document.querySelector("#growthRows");
const chartLabel = document.querySelector("#chartLabel");
const chartTitle = document.querySelector("#chartTitle");
const tableTitle = document.querySelector("#tableTitle");
const tableSubtitle = document.querySelector("#tableSubtitle");
const tableHeadOne = document.querySelector("#tableHeadOne");
const tableHeadTwo = document.querySelector("#tableHeadTwo");
const tableHeadThree = document.querySelector("#tableHeadThree");
const canvas = document.querySelector("#trendChart");
const context = canvas.getContext("2d");
const sopMap = document.querySelector("#sopMap");
const sopIllustration = document.querySelector("#sopIllustration");
const sopBadge = document.querySelector("#sopBadge");
const sopEyebrow = document.querySelector("#sopEyebrow");
const sopTitle = document.querySelector("#sopTitle");
const sopText = document.querySelector("#sopText");
const sopPrev = document.querySelector("#sopPrev");
const sopNext = document.querySelector("#sopNext");

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const number = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0
});

function formatValue(value, config) {
  if (config.valuePrefix === "$") return money.format(value);
  return `${number.format(value)}${config.valueSuffix}`;
}

function currentConfig() {
  return dashboards[activeDashboard];
}

function filteredData() {
  const selected = productFilter.value;
  const config = currentConfig();
  if (selected === "all") return config.rows;
  return config.rows.filter((row) => row.segment === selected);
}

function updateFilterOptions(config) {
  productFilter.innerHTML = config.options
    .map((option, index) => `<option value="${index === 0 ? "all" : option}">${option}</option>`)
    .join("");
}

function updateCopy(config) {
  dashboardKicker.textContent = config.kicker;
  dashboardTitle.textContent = config.title;
  filterLabel.textContent = config.filterLabel;
  metricOneLabel.textContent = config.metricLabels[0];
  metricTwoLabel.textContent = config.metricLabels[1];
  metricTwoNote.textContent = config.metricTwoNote;
  metricThreeLabel.textContent = config.metricLabels[2];
  chartTitle.textContent = config.chartTitle;
  tableTitle.textContent = config.tableTitle;
  tableSubtitle.textContent = config.tableSubtitle;
  tableHeadOne.textContent = config.tableHeads[0];
  tableHeadTwo.textContent = config.tableHeads[1];
  tableHeadThree.textContent = config.tableHeads[2];
}

function updateKpis(rows, config) {
  const totalValue = rows.reduce((sum, row) => sum + row.value, 0);
  const totalCount = rows.reduce((sum, row) => sum + row.count, 0);
  const strongestMonth = rows.reduce((best, row) => (row.value > best.value ? row : best), rows[0]);
  const latestGrowth = config.table[config.table.length - 1].change;

  revenueKpi.textContent = formatValue(totalValue, config);
  revenueDelta.textContent = `+${latestGrowth}% growth`;
  salesKpi.textContent = number.format(totalCount);
  bestMonth.textContent = strongestMonth.month;
  bestMonthValue.textContent = `${formatValue(strongestMonth.value, config)} ${config.lineLabel.toLowerCase()}`;
}

function updateGrowthTable(config) {
  growthRows.innerHTML = config.table
    .map(
      (row) => `
        <div class="table-row" role="row">
          <span>${row.period}</span>
          <span>${formatValue(row.value, config)}</span>
          <span>+${row.change}%</span>
        </div>
      `
    )
    .join("");
}

function drawTrendChart(rows, config) {
  const width = canvas.width;
  const height = canvas.height;
  const pad = 54;
  const chartWidth = width - pad * 2;
  const chartHeight = height - pad * 2;
  const maxValue = Math.max(...rows.map((row) => row.value)) * 1.12;
  const maxCount = Math.max(...rows.map((row) => row.count)) * 1.25;

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#fbfaf6";
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "rgba(23, 32, 38, 0.11)";
  context.lineWidth = 1;
  context.font = "14px Segoe UI, sans-serif";
  context.fillStyle = "#62717c";

  for (let i = 0; i <= 4; i += 1) {
    const y = pad + (chartHeight / 4) * i;
    context.beginPath();
    context.moveTo(pad, y);
    context.lineTo(width - pad, y);
    context.stroke();
    const label = formatValue(maxValue - (maxValue / 4) * i, config);
    context.fillText(label, 12, y + 5);
  }

  const xFor = (index) => pad + (chartWidth / Math.max(rows.length - 1, 1)) * index;
  const yValue = (value) => pad + chartHeight - (value / maxValue) * chartHeight;
  const yCount = (value) => pad + chartHeight - (value / maxCount) * chartHeight;

  rows.forEach((row, index) => {
    const x = xFor(index);
    context.fillStyle = "rgba(37, 99, 235, 0.16)";
    context.fillRect(x - 12, yCount(row.count), 24, pad + chartHeight - yCount(row.count));
    context.fillStyle = "#62717c";
    context.textAlign = "center";
    context.fillText(row.month, x, height - 18);
  });

  context.beginPath();
  rows.forEach((row, index) => {
    const x = xFor(index);
    const y = yValue(row.value);
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.strokeStyle = "#0f766e";
  context.lineWidth = 5;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.stroke();

  rows.forEach((row, index) => {
    const x = xFor(index);
    const y = yValue(row.value);
    context.beginPath();
    context.arc(x, y, 7, 0, Math.PI * 2);
    context.fillStyle = "#fffdfa";
    context.fill();
    context.strokeStyle = "#0f766e";
    context.lineWidth = 4;
    context.stroke();
  });

  context.textAlign = "left";
  context.fillStyle = "#0f766e";
  context.fillRect(width - 250, 22, 16, 5);
  context.fillStyle = "#172026";
  context.fillText(config.lineLabel, width - 226, 29);
  context.fillStyle = "rgba(37, 99, 235, 0.45)";
  context.fillRect(width - 118, 16, 16, 16);
  context.fillStyle = "#172026";
  context.fillText(config.barLabel, width - 94, 29);
}

function updateDashboard() {
  const config = currentConfig();
  const rows = filteredData();
  const label = productFilter.value === "all" ? config.options[0] : productFilter.value;
  chartLabel.textContent = label;
  updateKpis(rows, config);
  updateGrowthTable(config);
  drawTrendChart(rows, config);
}

function switchDashboard(type) {
  activeDashboard = type;
  const config = currentConfig();
  updateCopy(config);
  updateFilterOptions(config);
  dashboardTabs.querySelectorAll(".dashboard-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.dashboard === type);
  });
  updateDashboard();
}

function updateSopStep(index) {
  activeSopStep = (index + sopSteps.length) % sopSteps.length;
  const step = sopSteps[activeSopStep];
  sopMap.querySelectorAll(".sop-node").forEach((node) => {
    node.classList.toggle("is-active", Number(node.dataset.step) === activeSopStep);
  });
  sopIllustration.dataset.mode = step.mode;
  sopBadge.textContent = step.number;
  sopEyebrow.textContent = `Step ${step.number}`;
  sopTitle.textContent = step.title;
  sopText.textContent = step.text;
  sopNext.textContent = activeSopStep === sopSteps.length - 1 ? "Back to start" : "Next step";
}

convertBtn.addEventListener("click", () => {
  document.body.classList.add("is-converted");
  switchDashboard("sales");
  window.setTimeout(() => {
    dashboard.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 260);
});

dashboardTabs.addEventListener("click", (event) => {
  const tab = event.target.closest(".dashboard-tab");
  if (!tab) return;
  switchDashboard(tab.dataset.dashboard);
});

sopMap.addEventListener("click", (event) => {
  const node = event.target.closest(".sop-node");
  if (!node) return;
  updateSopStep(Number(node.dataset.step));
});

sopPrev.addEventListener("click", () => updateSopStep(activeSopStep - 1));
sopNext.addEventListener("click", () => updateSopStep(activeSopStep + 1));

productFilter.addEventListener("change", updateDashboard);
window.addEventListener("resize", updateDashboard);

switchDashboard("sales");
updateSopStep(0);
