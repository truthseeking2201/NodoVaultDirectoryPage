import { useMemo, useId } from 'react';

const heroImageUrl = 'https://www.figma.com/api/mcp/asset/e5a40a10-0fd9-4962-b53c-ab43faa17a13';
const filterIconUrl = 'https://www.figma.com/api/mcp/asset/7992c6e5-0188-494a-a0ca-1e2e5870c486';
const searchIconUrl = 'https://www.figma.com/api/mcp/asset/74daefcb-4fb7-4e8a-9656-94ef3c8c2733';

const vaultRows = [
  {
    id: 1,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$15.42M',
    totalDepositToken: '3.75M SUI',
    dex: { name: 'Momentum', accent: '#6b8dff' },
    assets: ['momentum', 'btc'],
    strategy: 'BTC Strategy',
    apy: '12.57%',
  },
  {
    id: 2,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$10.90M',
    totalDepositToken: '2.88M SUI',
    dex: { name: 'Cetus', accent: '#5cd68c' },
    assets: ['cetus', 'eth'],
    strategy: 'Alpha Strategy',
    apy: '11.29%',
  },
  {
    id: 3,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$22.88M',
    totalDepositToken: '9.01M SUI',
    dex: { name: 'Momentum', accent: '#6b8dff' },
    assets: ['momentum', 'eth'],
    strategy: 'LP Strategy',
    apy: '7.80%',
  },
  {
    id: 4,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$7.58M',
    totalDepositToken: '5.23M SUI',
    dex: { name: 'Cetus', accent: '#5cd68c' },
    assets: ['cetus', 'btc'],
    strategy: 'Delta Strategy',
    apy: '15.42%',
  },
  {
    id: 5,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$18.34M',
    totalDepositToken: '11.79M SUI',
    dex: { name: 'Momentum', accent: '#6b8dff' },
    assets: ['momentum', 'btc'],
    strategy: 'Hedge Strategy',
    apy: '9.76%',
  },
  {
    id: 6,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$6.47M',
    totalDepositToken: '8.65M SUI',
    dex: { name: 'Cetus', accent: '#5cd68c' },
    assets: ['cetus', 'eth'],
    strategy: 'Flow Strategy',
    apy: '8.34%',
  },
  {
    id: 7,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$11.82M',
    totalDepositToken: '6.55M SUI',
    dex: { name: 'Momentum', accent: '#6b8dff' },
    assets: ['momentum', 'btc'],
    strategy: 'Yield Strategy',
    apy: '14.69%',
  },
  {
    id: 8,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$11.82M',
    totalDepositToken: '6.55M SUI',
    dex: { name: 'Cetus', accent: '#5cd68c' },
    assets: ['cetus', 'btc'],
    strategy: 'Yield Strategy',
    apy: '14.69%',
  },
  {
    id: 9,
    pair: 'LBTC - WBTC',
    tokens: ['lbtc', 'wbtc'],
    totalDepositUsd: '$11.82M',
    totalDepositToken: '6.55M SUI',
    dex: { name: 'Momentum', accent: '#6b8dff' },
    assets: ['momentum', 'eth'],
    strategy: 'Yield Strategy',
    apy: '14.69%',
  },
];

const socialItems = [
  { id: 'discord', label: 'Discord' },
  { id: 'x', label: 'X' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'linkedin', label: 'LinkedIn' },
];

const footerLinks = [
  { label: 'Docs', href: '#' },
  { label: 'Contact', href: '#' },
];

const filterControls = [
  { label: 'Deposit', value: 'All' },
  { label: 'Dex', value: 'All' },
  { label: 'Chain', value: 'All' },
];

const tokenGradients = {
  lbtc: 'linear-gradient(180deg, #4ae4ff 0%, #3158ff 100%)',
  wbtc: 'linear-gradient(180deg, #fbd77c 0%, #f7931a 100%)',
  momentum: 'linear-gradient(180deg, #586cff 0%, #1a2cff 100%)',
  cetus: 'linear-gradient(180deg, #55f7c2 0%, #2ab46b 100%)',
  btc: 'linear-gradient(180deg, #f5b952 0%, #e88418 100%)',
  eth: 'linear-gradient(180deg, #c7d2ff 0%, #6f7dff 100%)',
};

function TokenIcon({ variant }) {
  const style = useMemo(
    () => ({ backgroundImage: tokenGradients[variant] ?? 'linear-gradient(180deg, #444, #222)' }),
    [variant]
  );

  return <span className="token-icon" style={style} aria-hidden="true" />;
}

function DexBadge({ name, accent }) {
  return (
    <span className="dex-badge" style={{ color: accent }}>
      <span className="dex-dot" style={{ backgroundColor: accent }} />
      {name}
    </span>
  );
}

function SocialIcon({ type }) {
  switch (type) {
    case 'discord':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label="Discord">
          <path
            d="M18.2 5.3A13.4 13.4 0 0 0 14.7 4l-.5 1.1a11 11 0 0 0-4.3 0L9.3 4a13.4 13.4 0 0 0-3.5 1.3C3.7 10.3 3 15 3 15s1.4 1.6 4.6 1.7l.6-.8c-.7-.3-1.5-.7-2.2-1.2.6.3 1.4.6 2.3.8 1.4.3 2.9.4 4.4.4a26 26 0 0 0 4.5-.4c.8-.2 1.6-.5 2.3-.8a9 9 0 0 1-2.2 1.2l.7.8c3.2-.1 4.5-1.7 4.5-1.7s-.7-4.7-2.3-9.7Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label="X">
          <path
            d="M18.4 4h2.1l-6.3 7.2 7.4 8.8h-5.8l-4.5-5.4-5.1 5.4H4.1l6.7-7.5L3.8 4h6l4 4.9z"
            fill="currentColor"
          />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label="YouTube">
          <path
            d="M22 7.6s-.2-2.3-.9-3.2a3 3 0 0 0-2-.9C16.8 3 12 3 12 3s-4.8 0-7.1.5c-.8.1-1.5.5-2 .9-.7.9-.9 3.2-.9 3.2S1.8 10 1.8 12.4v2.4s.2 2.4.9 3.3c.5.4 1.2.8 2 .9C7.2 19 12 19 12 19s4.8 0 7.1-.5c.8-.1 1.5-.5 2-.9.7-.9.9-3.3.9-3.3V12.4c0-2.4-.1-4.8-.1-4.8Zm-11 6.6V8l4.7 3.1z"
            fill="currentColor"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-label="LinkedIn">
          <path
            d="M4.5 3.5a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6ZM3 9.2h3v11.3H3zm6 0h2.9v1.5h.1c.4-.8 1.6-1.7 3.3-1.7 3.5 0 4.2 2.3 4.2 5.3v6.2h-3V15c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.2v5.5H9Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

function NodoLogo({ className = '' }) {
  const gradientId = useId();
  return (
    <svg
      className={className}
      width="80"
      height="35"
      viewBox="0 0 80 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="NODO logo"
    >
      <path
        d="M59.5273 5.34227V17.1772C60.7383 13.2769 64.3871 10.443 68.7002 10.4429C74.0023 10.4429 78.3008 14.7246 78.3008 20.0063C78.3007 25.2879 74.0022 29.5698 68.7002 29.5698C64.2518 29.5696 60.5103 26.5552 59.4209 22.4653C58.3315 26.5554 54.5893 29.5698 50.1406 29.5698C45.6157 29.5698 41.8216 26.4505 40.8066 22.2534C39.7917 26.4505 35.9985 29.5697 31.4736 29.5698C27.28 29.5698 23.7138 26.891 22.4062 23.1577V28.0815H18.1396V21.7065C18.1396 18.1854 15.274 15.3306 11.7393 15.3306C8.20465 15.3307 5.33887 18.1855 5.33887 21.7065V28.0815H1.07227V21.7065C1.07227 15.8381 5.84817 11.0807 11.7393 11.0806C16.5725 11.0806 20.6554 14.2825 21.9658 18.6733C22.6169 14.0226 26.6256 10.4429 31.4736 10.4429C35.9984 10.4429 39.7917 13.5613 40.8066 17.7583C41.8216 13.5612 45.6157 10.4429 50.1406 10.4429C52.0229 10.4429 53.7789 10.9821 55.2607 11.9145V5.34227H59.5273ZM31.4736 14.6929C28.528 14.6929 26.1396 17.0721 26.1396 20.0063C26.1398 22.9405 28.5281 25.3188 31.4736 25.3188C34.4191 25.3188 36.8065 22.9405 36.8066 20.0063C36.8066 17.0721 34.4192 14.6929 31.4736 14.6929ZM50.1406 14.6929C47.1951 14.6929 44.8076 17.0721 44.8076 20.0063C44.8077 22.9405 47.1952 25.3188 50.1406 25.3188C53.0862 25.3188 55.4745 22.9405 55.4746 20.0063C55.4746 17.0721 53.0862 14.6929 50.1406 14.6929ZM68.7002 14.6929C65.7548 14.6931 63.3672 17.0722 63.3672 20.0063C63.3673 22.9404 65.7548 25.3186 68.7002 25.3188C71.6457 25.3188 74.0341 22.9405 74.0342 20.0063C74.0342 17.0721 71.6458 14.6929 68.7002 14.6929Z"
        fill={`url(#${gradientId})`}
      />
      <defs>
        <linearGradient id={gradientId} x1="1.07227" y1="17.456" x2="78.3008" y2="17.456" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D47150" />
          <stop offset="1" stopColor="#FFB854" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="top-bar">
        <div className="brand-mark">
          <NodoLogo className="brand-logo" />
          <sup>TM</sup>
        </div>
        <a className="github-link" href="#" aria-label="Our Github">
          Our Github
          <span className="github-arrow" aria-hidden="true">
            <svg viewBox="0 0 16 16">
              <path
                d="M4 12.5 12.5 4M9 4h3.5V7.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </header>

      <main className="main-shell">
        <section className="hero-card">
          <div className="hero-copy">
            <p className="eyebrow">NODO Vaults</p>
            <h1>Expertly managed vaults from leading partners.</h1>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-label">Total Deposits</span>
                <span className="stat-value">$67,927,155.00</span>
              </div>
              <div className="stat">
                <span className="stat-label">Depositors</span>
                <span className="stat-value">37,059</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImageUrl} alt="Vault abstract art" loading="lazy" />
          </div>
        </section>

        <section className="filter-row">
          <div className="filters">
            {filterControls.map((control) => (
              <div className="filter" key={control.label}>
                <span className="label">{control.label}:</span>
                <button type="button">
                  <img src={filterIconUrl} alt="filter" />
                  <span>{control.value}</span>
                </button>
              </div>
            ))}
          </div>
          <label className="search" aria-label="Search vaults">
            <img src={searchIconUrl} alt="Search" />
            <input placeholder="Search vaults" />
          </label>
        </section>

        <section className="vaults-card">
          <div className="table-head">
            <span>Deposit</span>
            <span>Total Deposit</span>
            <span>DEX</span>
            <span>Assets</span>
            <span>Strategy</span>
            <span>7D APY</span>
          </div>
          <div className="vault-rows">
            {vaultRows.map((row) => (
              <article key={row.id} className="vault-row">
                <div className="pair">
                  <div className="token-stack">
                    {row.tokens.map((token) => (
                      <TokenIcon key={token} variant={token} />
                    ))}
                  </div>
                  <div>
                    <p className="pair-name">{row.pair}</p>
                    <p className="pair-sub">SUI Network</p>
                  </div>
                </div>
                <div className="deposit">
                  <p className="usd">{row.totalDepositUsd}</p>
                  <p className="token">{row.totalDepositToken}</p>
                </div>
                <div className="dex">
                  <DexBadge name={row.dex.name} accent={row.dex.accent} />
                </div>
                <div className="assets">
                  {row.assets.map((asset) => (
                    <TokenIcon key={asset} variant={asset} />
                  ))}
                </div>
                <div className="strategy">{row.strategy}</div>
                <div className="apy">
                  <span>{row.apy}</span>
                  <span className="trend">
                    <svg viewBox="0 0 12 12" aria-hidden="true">
                      <path
                        d="m2 7 2.8-2.8 2.2 2.1L10 4"
                        fill="none"
                        stroke="#66ff99"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <button type="button" className="expand" aria-label="Open vault details">
                    +
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="pagination">
            <button type="button" aria-label="Previous page">{'<'}</button>
            <button type="button" className="active">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" aria-label="Next page">{'>'}</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-shell">
          <div className="footer-header">
            <div>
              <div className="brand-mark large">
                <NodoLogo className="brand-logo" />
                <sup>TM</sup>
              </div>
              <p className="footer-copy">
                NODO is a yield infrastructure protocol delivering autonomous, AI-powered liquidity provisioning to DeFi. It
                creates intelligent vaults on-chain that actively manage LP positions in real time, maximizing capital
                efficiency, minimizing impermanent loss, and capturing trading fees across top decentralized exchanges.
              </p>
              <div className="audits">
                <span>Audited by</span>
                <div className="audit-logos">
                  <span>QuillAudits</span>
                  <span>hashlock</span>
                  <span>HYPRNATIVE</span>
                </div>
              </div>
            </div>
            <div className="footer-nav">
              <p>Navigation</p>
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-panels">
            <div className="panel follow">
              <p>Follow Us</p>
              <div className="social-row">
                {socialItems.map((item) => (
                  <a key={item.id} href="#" aria-label={item.label}>
                    <SocialIcon type={item.id} />
                  </a>
                ))}
              </div>
            </div>
            <div className="panel">
              <p>For customer support queries</p>
              <button type="button">Contact Support</button>
            </div>
            <div className="panel">
              <p>For partnership queries</p>
              <button type="button">Get In Touch</button>
            </div>
          </div>
          <p className="footer-meta">&copy;2025 NODO. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
