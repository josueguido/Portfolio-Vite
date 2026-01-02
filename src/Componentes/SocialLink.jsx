import PropTypes from 'prop-types'
function SocialLink({ url, icon, text }) {
  return (
    <a 
      href={url} 
      title={text}
      className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 relative z-20"
    >
      <img src={icon} className="w-6 h-6" alt={text} />
    </a>
  );
}

SocialLink.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default SocialLink;
