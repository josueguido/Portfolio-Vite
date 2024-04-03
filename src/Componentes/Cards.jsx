import PropTypes from 'prop-types';
import GitHub from "../../public/GitHub.svg"
import Link from "../../public/Link.svg"




const Card = ({ image, title, description, codeLink, previewLink }) => {
 

    return (
        <article className='grid grid-cols-2 gap-x-4 w-10/12 h-auto'>
            <img src={image} alt={title} className=' w-full h-auto max-w-400 rounded-md object-cover' />
            <section >
                <div className='flex flex-col py-2 gap-4'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

                <div className='flex flex-row items-start justify-start gap-10'>

                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className='inline-flex gap-2 hover:bg-gray-200 py-2 px-3 rounded-md'>

                        <img src={Link} alt="Link Icon" />
                        Preview
                    </a>

                    <a href={previewLink} target="_blank" rel="noopener noreferrer" className='inline-flex gap-2 hover:bg-gray-200 py-2 px-3 rounded-md'>
                        <img src={GitHub} alt="GitHub Icon" />
                        Code
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
