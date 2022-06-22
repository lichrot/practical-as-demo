export const Link: React.FC<React.PropsWithChildren<{ href: string }>> = ({ href, children }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='text-center font-mono text-sm text-slate-400 hover:text-white'
  >
    {children}
  </a>
);
