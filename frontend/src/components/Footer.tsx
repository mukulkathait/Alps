function Footer({ className = "" }) {
  return (
    <div
      className={`flex leading-tight flex-wrap text-xs text-gray-700 gap-2 ${className}`}
    >
      <div>Help</div>
      <div>Status</div>
      <div>About</div>
      <div>Careers</div>
      <div>Press</div>
      <div>Blog</div>
      <div>Privacy</div>
      <div>Terms</div>
      <div className="text-nowarp">Text to speech</div>
      <div>Teams</div>
    </div>
  );
}

export default Footer;
