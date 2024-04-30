import PropTypes from 'prop-types'
function SocialLink({ url, icon, text }) {
  return (
    <a href={url} className="inline-flex items-center py-2 px-2 border-gray-600 rounded-md hover:bg-gray-200 gap-2 md:gap-0 relative z-20">
      <div className="flex flex-row items-center justify-center">
        <img src={icon} className="w-20 h-10 rounded-md" alt='Social' />
        <p className="max-w-xs md:max-w-none hidden md:block">{text}</p>
      </div>
    </a>
  );
}

SocialLink.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}



export default SocialLink;
