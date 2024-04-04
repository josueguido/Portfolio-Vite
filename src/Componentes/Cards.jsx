import PropTypes from 'prop-types';
import GitHub from "../../public/GitHub.svg"
import Link from "../../public/Link.svg"




const Card = ({ image, title, description, codeLink, previewLink }) => {


    return (
        <article className='flex flex-col md:grid md:grid-cols-2 md:gap-x-4 w-10/12 h-auto py-8 '>
            <div className='flex rounded-md bg-gray-200'>
                <div className='w-full h-auto max-w-400 rounded-lg overflow-hidden py-6'>
                    <img src={image} alt={title} className='w-full h-auto object-cover p-2' />
                </div>
            </div>


            <section>
                <div className='flex flex-col py-6 gap-4 px-10'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                <div className='flex flex-row items-start justify-start px-10 gap-4 md:flex-row md:items-center md:justify-start md:text-start md:gap-10'>

                    <a href={previewLink} target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2 bg-gray-200 hover:bg-gray-400 py-2 px-6 md:px-3 text-start items-center rounded-md dark:text-black'>

                        <img src={Link} alt="Link Icon" className="w-4 h-4" />
                        <span className="">Preview</span>
                    </a>

                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className='inline-flex gap-2 bg-gray-200 hover:bg-gray-400 dark:text-black py-2 px-6 md:px-3 rounded-md text-start items-center '>
                        <img src={GitHub} alt="GitHub Icon" className="w-4 h-4" />
                        <span className="">Code</span>
                    </a>
                </div>


            </section>
        </article>
    );
};

// Define las PropTypes para el componente Card
Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    codeLink: PropTypes.string,
    previewLink: PropTypes.string.isRequired,

};

export default Card;
