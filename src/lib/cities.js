// ── BRAND & CONTACT ────────────────────────────────────
export const PHONE = '(810) 545-4201';
export const PHONE_LINK = 'tel:+18105454201';
export const BRAND = 'Stinger Heavy Haul';
export const TAGLINE = 'Michigan Equipment Transport';
export const DOMAIN = 'towtruck.cv';

// ── SERVICES ───────────────────────────────────────────
export const services = [
  {
    name: 'Construction Equipment Hauling',
    slug: 'construction-equipment-hauling',
    icon: '🏗️',
    desc: 'Excavators, backhoes, skid steers, dozers, compactors — loaded, secured, and delivered to your job site on schedule.',
  },
  {
    name: 'SkyTrak & Telehandler Transport',
    slug: 'skytrak-telehandler-transport',
    icon: '🔧',
    desc: 'Specialized transport for SkyTraks with attachments and man boxes. We know these machines because we operate them.',
  },
  {
    name: 'Heavy Machinery Recovery',
    slug: 'heavy-machinery-recovery',
    icon: '⚙️',
    desc: 'Hydraulic recovery trailers rated for Michigan maximum weight. Stuck, tipped, or broken down — we recover and relocate.',
  },
  {
    name: 'Oversize & Heavy Load Hauling',
    slug: 'oversize-heavy-load',
    icon: '🚛',
    desc: 'Michigan allows up to 164,000 lbs with proper axle configuration. We handle permitting, routing, and transport.',
  },
  {
    name: 'Forklift & Aerial Lift Transport',
    slug: 'forklift-aerial-lift-transport',
    icon: '📦',
    desc: 'Forklifts, boom lifts, scissor lifts — any warehouse or aerial equipment moved safely between sites.',
  },
  {
    name: 'Emergency Equipment Moves',
    slug: 'emergency-equipment-moves',
    icon: '🚨',
    desc: 'Job site down? Equipment failure? We dispatch fast for emergency equipment relocations and breakdowns.',
  },
];

// ── TRUST SIGNALS ──────────────────────────────────────
export const trustSignals = [
  'Michigan DOT Compliant',
  'Fully Insured & Bonded',
  'Hydraulic Recovery Capable',
  'Up to MI Max Weight (164K lbs)',
  'SkyTrak & Attachment Specialists',
  'Available 7 Days a Week',
];

// ── CITY DATA ──────────────────────────────────────────
// Focused on the SE Michigan construction belt:
// Oakland County, Livingston County, Washtenaw County, Western Wayne
// This is where subdivision builders run SkyTraks and heavy equipment daily.
export const cities = {
  michigan: {
    name: 'Michigan',
    state: 'MI',
    slug: 'michigan',
    isState: true,
    tagline: 'Heavy Equipment Hauling Across Southeast Michigan',
    description: `${BRAND} provides heavy equipment hauling across Southeast Michigan's construction corridor. We transport SkyTraks with attachments and man boxes, telehandlers, excavators, and heavy machinery between job sites. Hydraulic recovery trailers rated for Michigan's maximum weight limits. Owner-operated — not a broker.`,
    areas: [
      'Novi', 'Brighton', 'Ann Arbor', 'Troy', 'Rochester Hills',
      'Canton', 'Plymouth', 'Howell', 'South Lyon', 'Northville',
    ],
    interstates: ['I-96', 'US-23', 'I-275', 'I-75', 'I-94', 'M-14'],
    meta: {
      title: `Heavy Equipment Hauling Michigan | ${BRAND}`,
      description: `Heavy equipment hauling across SE Michigan. SkyTrak transport, telehandlers, excavators, construction equipment. Hydraulic recovery. Up to 164,000 lbs. Call ${PHONE}.`,
    },
  },
  'oakland-county': {
    name: 'Oakland County',
    state: 'MI',
    slug: 'oakland-county',
    tagline: 'Heavy Equipment Hauling in Oakland County',
    description: `${BRAND} hauls construction equipment across Oakland County — Novi, Troy, Rochester Hills, South Lyon, Commerce Township, Waterford, Clarkston, and Auburn Hills. SkyTrak transport between subdivision job sites, heavy machinery moves, and hydraulic recovery.`,
    areas: [
      'Novi', 'Troy', 'Rochester Hills', 'South Lyon', 'Commerce Twp',
      'Waterford', 'Clarkston', 'Auburn Hills', 'West Bloomfield', 'Pontiac',
    ],
    interstates: ['I-75', 'I-696', 'I-96', 'M-5', 'M-59', 'US-24'],
    meta: {
      title: `Heavy Equipment Hauling Oakland County MI | ${BRAND}`,
      description: `Heavy equipment hauling in Oakland County. SkyTrak transport, construction equipment, telehandlers. Novi, Troy, Rochester Hills, South Lyon. Call ${PHONE}.`,
    },
  },
  brighton: {
    name: 'Brighton',
    state: 'MI',
    slug: 'brighton',
    tagline: 'Heavy Equipment Hauling in Brighton & Livingston County',
    description: `${BRAND} provides heavy equipment hauling across Brighton, Howell, Hartland, and all of Livingston County. Located at the I-96 / US-23 crossroads, we're positioned to serve construction sites across the county's active subdivision development corridor.`,
    areas: [
      'Brighton', 'Howell', 'Hartland', 'Fowlerville', 'Pinckney',
      'Hamburg', 'Green Oak Twp', 'Genoa Twp', 'Marion Twp', 'Tyrone Twp',
    ],
    interstates: ['I-96', 'US-23', 'M-59', 'Grand River Ave'],
    meta: {
      title: `Heavy Equipment Hauling Brighton MI | ${BRAND}`,
      description: `Heavy equipment hauling in Brighton & Livingston County. SkyTrak transport, construction equipment, heavy machinery. I-96 / US-23 corridor. Call ${PHONE}.`,
    },
  },
  'ann-arbor': {
    name: 'Ann Arbor',
    state: 'MI',
    slug: 'ann-arbor',
    tagline: 'Heavy Equipment Hauling in Ann Arbor & Washtenaw County',
    description: `${BRAND} provides heavy equipment hauling across Ann Arbor, Saline, Dexter, Chelsea, and Washtenaw County. We serve the active new construction market along the US-23 / I-94 / M-14 corridor — subdivision equipment moves, heavy machinery transport, and hydraulic recovery.`,
    areas: [
      'Ann Arbor', 'Saline', 'Dexter', 'Chelsea', 'Milan',
      'Ypsilanti', 'Pittsfield Twp', 'Scio Twp', 'Webster Twp', 'Manchester',
    ],
    interstates: ['US-23', 'I-94', 'M-14', 'M-52', 'M-17'],
    meta: {
      title: `Heavy Equipment Hauling Ann Arbor MI | ${BRAND}`,
      description: `Heavy equipment hauling in Ann Arbor & Washtenaw County. Construction equipment, SkyTraks, telehandlers. Call ${PHONE}.`,
    },
  },
  canton: {
    name: 'Canton',
    state: 'MI',
    slug: 'canton',
    tagline: 'Heavy Equipment Hauling in Canton, Plymouth & Western Wayne',
    description: `${BRAND} provides heavy equipment hauling across Canton, Plymouth, Northville, Livonia, and Western Wayne County. Active subdivision construction throughout this corridor means constant equipment moves — SkyTraks, telehandlers, excavators, and more.`,
    areas: [
      'Canton', 'Plymouth', 'Northville', 'Livonia', 'Westland',
      'Wayne', 'Garden City', 'Belleville', 'Van Buren Twp', 'Romulus',
    ],
    interstates: ['I-275', 'I-96', 'I-94', 'M-14', 'M-153'],
    meta: {
      title: `Heavy Equipment Hauling Canton MI | ${BRAND}`,
      description: `Heavy equipment hauling in Canton, Plymouth & Western Wayne County. Construction equipment, SkyTraks, heavy machinery. Call ${PHONE}.`,
    },
  },
};
