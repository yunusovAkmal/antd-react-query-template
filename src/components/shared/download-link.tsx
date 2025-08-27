export const DownloadLink = ({ href, text = 'Yuklash' }: { href: string; text?: string }) => (
  <a
    className="text-blue-500 hover:text-blue-600 hover:underline"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {text}
  </a>
)
