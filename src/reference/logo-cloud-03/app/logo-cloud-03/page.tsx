import LogoCloud from '../../components/shadcn-studio/blocks/logo-cloud-03/logo-cloud-03'

const brandLogos = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/microsoft-icon.png',
    alt: 'Microsoft'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/google-logo.png',
    alt: 'Google'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/amazon-logo.png',
    alt: 'Amazon'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/ola-icon.png',
    alt: 'Ola'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/paypal.png',
    alt: 'Paypal'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/hubspot-logo.png',
    alt: 'Hubspot'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/deloitte-logo.png',
    alt: 'Deloitte'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/huawei-icon-circle.png',
    alt: 'Huawei'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/evernote-icon-bw.png',
    alt: 'Evernote'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/walmart-logo.png',
    alt: 'Walmart'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/fedex-logo.png',
    alt: 'Fedex'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/brand-logo/airbnb-icon-circle.png',
    alt: 'Airbnb'
  }
]

const LogoCloudPage = () => {
  return <LogoCloud brandLogos={brandLogos} />
}

export default LogoCloudPage
