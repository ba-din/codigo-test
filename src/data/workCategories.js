const workCategories = [
  { title: 'All', key: 'all', active: 'true' }, // 0
  { title: 'Food & Beverage', key: 'food-and-beverage' },
  { title: 'Media', key: 'media' },
  { title: 'Transport & Logistics', key: 'transport-and-logistics' },
  { title: 'Banking & Finance', key: 'banking-and-finance' }, //4
  { title: 'Lifestyle', key: 'lifestyle' },
  { title: 'Co-incubation', key: 'co-incubation' },
  { title: 'Healthcare', key: 'healthcare' },
  { title: 'Retail & Entertainment', key: 'retail-and-entertainment' },
  { title: 'Telco', key: 'telco' }, //9
  { title: 'Others', key: 'others' },
  { title: 'Start-ups', key: 'start-ups' },
]

export const legends = [
  { title: 'app', styleClass: 'workGrid__IcoPlatforms workGridIcoPlatforms--app' },
  { title: 'web', styleClass: 'workGrid__IcoPlatforms workGridIcoPlatforms--web' },
  { title: 'cms', styleClass: 'workGrid__IcoPlatforms workGridIcoPlatforms--web' },
  { title: 'ui/ux', styleClass: 'workGrid__IcoPlatforms workGridIcoPlatforms--uiux' },
]

export const works = [
  { label: 'Ecolab', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2021/04/PAO-0@2x.jpg', cat: [10], legends: [0, 2, 3] },
  { label: 'KIWI Auto Marketplace', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2021/04/KIWI-0@2x.jpg', cat: [10, 11], legends: [0, 1, 2, 3] },
  { label: 'Furama Hotels', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2021/04/FURAMA-0@2x.jpg', cat: [5], legends: [0, 3] },
  { label: 'Woodlands Transport', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2021/04/WTS-0@2x.jpg', cat: [3], legends: [0, 1, 2, 3] },
  { label: 'Ready To Travel (SATS)', styleClass: 'workGrid__gridItem workGrid__colWidth--span2 color--black', img: 'https://cdn.codigo.co/uploads/2021/04/RTT-0@2x.jpg', cat: [5, 8], legends: [0, 1, 2, 3] },
  { label: 'Yoga Movement', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2021/04/YM-0@2x-1.jpg', cat: [5], legends: [0, 1, 2, 3] },
  { label: 'Don Don Donki', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2021/04/DONKI-0@2x.jpg', cat: [8], legends: [0, 2, 3] },
  { label: 'TAP Ride Hailing', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2021/04/TAP-0@2x.jpg', cat: [3], legends: [] },
  { label: 'FWD Insurance', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2021/04/FWD-0@2x.jpg', cat: [10], legends: [0, 2, 3] },
  { label: 'HBO GO', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2021/04/HBO-0@2x-2.jpg', cat: [8], legends: [0, 3] },
  { label: 'Isetan', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2021/04/ISETAN-0@2x.jpg', cat: [8], legends: [0, 3] },
  { label: 'MyRepublic Mobile', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2018/12/MYR.jpg', cat: [9], legends: [0, 2] },
  { label: 'ComfortDelGro', styleClass: 'workGrid__gridItem color--black', img: 'https://cdn.codigo.co/uploads/2018/08/CDG-2-1.jpg', cat: [3], legends: [0] },
  { label: '7Rewards', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2018/04/711.jpg', cat: [8], legends: [0, 1, 2] },
  { label: 'FairPrice Online', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2018/08/FPOL.jpg', cat: [8], legends: [3] },
  { label: 'Charles & Keith', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2018/12/ck.jpg', cat: [8], legends: [0] },
  { label: 'Justice League', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2018/11/thumbnail-justice_league@2x.jpg', cat: [8], legends: [0] },
  { label: 'Fullerton Health', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2018/11/fullerton-health-thumbnail@2x.jpg', cat: [7], legends: [0] },
  { label: 'Sky Premium', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2018/11/skypremium-thumbnail@2x.jpg', cat: [5], legends: [0, 1] },
  { label: 'T Singapore', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2018/12/TSingapore-thumbnail@2x.jpg', cat: [5], legends: [1, 2] },
  { label: 'SingPost', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2018/12/singpost-thumbnail@2x.jpg', cat: [3], legends: [0, 4] },
  { label: 'Dine Inn', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2018/12/dineinn.jpg', cat: [1, 11], legends: [0, 1, 2] },
  { label: 'Siemens Engineering', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2018/11/siemens.jpg', cat: [3], legends: [0, 1, 2] },
  { label: 'FastFast Delivery', styleClass: 'workGrid__gridItem workGrid__colWidth--span2', img: 'https://cdn.codigo.co/uploads/2018/12/FF-1.jpg', cat: [3, 11, 6], legends: [0, 1, 2] },
  { label: 'Singapore Grand Prix', styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2018/12/f1.jpg', cat: ['others'], legends: [0, 1, 2] },
  { label: "McDonald's", styleClass: 'workGrid__gridItem', img: 'https://cdn.codigo.co/uploads/2018/12/mc-cafe-thumbnail@2x.jpg', cat: [1], legends: [0] },
]

export default workCategories;