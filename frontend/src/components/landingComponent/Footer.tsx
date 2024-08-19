function Footer({ className = "" }) {
  return (
    <div
      className={`bg-footer-bg flex justify-center items-center text-sm text-gray-500 gap-4 ${className}`}
    >
      <div>Help</div>
      <div>Status</div>
      <div>About</div>
      <div>Careers</div>
      <div>Press</div>
      <div>Blog</div>
      <div>Privacy</div>
      <div>Terms</div>
      <div>Text to speech</div>
      <div>Teams</div>
    </div>
  );
}

export default Footer;
