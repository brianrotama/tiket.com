import dns from 'dns';

export default async function globalSetup() {
  dns.setDefaultResultOrder('ipv4first');
}
