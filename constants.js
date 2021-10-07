export const languages = [
  {
    name: 'English',
    code: 'en',
    iso: 'en-US',
    isCatchallLocale: true,
  },
  {
    name: 'Português',
    code: 'pt',
    iso: 'pt-PT',
  },
]

export const EVENTS_URL =
  process.env.EVENTS_URL ||
  'https://raw.githubusercontent.com/otherplane/liscon-week/main/events.csv'

export const WEEK = {
  18: {
    key: '18',
    timestamp: 1634515200000,
    name: 'Mon',
  },
  19: {
    key: '19',
    timestamp: 1634601600000,
    name: 'Tue',
  },
  20: {
    key: '20',
    timestamp: 1634688000000,
    name: 'Wed',
  },
  21: {
    key: '21',
    timestamp: 1634774400000,
    name: 'Thur',
  },
  22: {
    key: '22',
    timestamp: 1634860800000,
    name: 'Fri',
  },
  23: {
    key: '23',
    timestamp: 1634947200000,
    name: 'Sat',
  },
  24: {
    key: '24',
    timestamp: 1635033600000,
    name: 'Sun',
  },
}

export const EVENT_CATEGORIES = [
  { label: 'All' },
  { label: 'Favorites' },
  { label: 'Events' },
  { label: 'Hackathons' },
  { label: 'Workshops' },
  { label: 'Drinks' },
]

export const SPONSORS = [
  {
    url: 'https://1inch.io/',
    name: '1 inch',
    img: '1inch-logo.svg',
    type: 'platinum',
  },
  {
    url: 'https://thegraph.com/',
    name: 'The graph',
    img: 'thegraph-logo.svg',
    type: 'platinum',
  },
  {
    url: 'https://www.orchid.com/',
    name: 'Orchid',
    img: 'orchid-logo.svg',
    type: 'gold',
  },
  {
    url: 'https://paraswap.io/',
    name: 'Paraswap',
    img: 'paraswap.jpeg',
    type: 'gold round',
  },
  {
    url: 'https://zerion.io/',
    name: 'Zerion',
    img: 'zerion-logo.png',
    type: 'gold',
  },
  {
    url: 'https://centrifuge.io/',
    name: 'Centrifuge',
    img: 'centrifuge-logo.png',
    type: 'silver',
  },
  {
    url: 'https://chainsafe.io/',
    name: 'Chain safe',
    img: 'chainsafe-logo.png',
    type: 'silver',
  },
  {
    url: 'https://debridge.finance/',
    name: 'De Bridge',
    img: 'debridge-logo.svg',
    type: 'silver',
  },
  {
    url: 'https://ethereum.foundation/',
    name: 'Ethereum Foundation',
    img: 'ethereumfoundation-logo.svg',
    type: 'silver',
  },
  {
    url: 'https://gnosis.io/',
    name: 'Gnosis',
    img: 'gnosis-logo.svg',
    type: 'silver',
  },
  {
    url: 'https://www.spectral.finance/',
    name: 'Spectral finance',
    img: 'spectral-logo.svg',
    type: 'silver',
  },
  {
    url: 'https://witnet.io/',
    name: 'Witnet',
    img: 'witnet-logo.svg',
    type: 'partner',
  },
  {
    url: 'https://agora.space/',
    name: 'Agora Space',
    img: 'agoraspace-logo.svg',
    type: 'partner',
  },
  {
    url: 'https://arcadiamgroup.com/',
    name: 'Arcadia',
    img: 'arcadia-logo.png',
    type: 'partner',
  },
  {
    url: 'https://aztec.network/',
    name: 'Aztec',
    img: 'aztec-logo.jpeg',
    type: 'partner round',
  },
  {
    url: 'https://dappnode.io/',
    name: 'DAppNode',
    img: 'dappnode-logo.png',
    type: 'partner round',
  },
  {
    url: 'https://degate.com/',
    name: 'De Gate',
    img: 'degate-logo.svg',
    type: 'partner',
  },
  {
    url: 'https://dxdao.eth.link/#/',
    name: 'DXdao',
    img: 'dxdao-logo.svg',
    type: 'partner',
  },
  {
    url: 'https://medium.com/celoorg/announcing-optics-a-gas-efficient-interoperability-standard-for-cross-chain-communication-e597163b2',
    name: 'Optics',
    img: 'optics-logo.png',
    type: 'partner',
  },
  {
    url: 'https://www.metis.io/',
    name: 'Metis',
    img: 'metis-logo.png',
    type: 'partner',
  },
  {
    url: 'https://www.pillar.fi/',
    name: 'Pillar',
    img: 'pillar-logo.svg',
    type: 'partner',
  },
  {
    url: 'https://www.rekt.news/',
    name: 'Rekt',
    img: 'rekt-logo.svg',
    type: 'partner',
  },
  {
    url: 'https://simplefi.finance/',
    name: 'SimpleFi',
    img: 'simplefi-logo.png',
    type: 'partner',
  },
  {
    url: 'https://spacemesh.io/',
    name: 'Spacemesh',
    img: 'spacemesh-logo.svg',
    type: 'partner',
  },
  {
    url: 'https://stakewise.io/',
    name: 'Stakewise',
    img: 'stakewise.png',
    type: 'partner',
  },
  {
    url: 'https://www.withtally.com/',
    name: 'Tally',
    img: 'tally-logo.png',
    type: 'partner round',
  },
  {
    url: 'https://yapglobal.com/',
    name: 'Yap global',
    img: 'yapglobal-logo.png',
    type: 'partner',
  },
]
