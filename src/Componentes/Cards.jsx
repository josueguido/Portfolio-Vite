import PropTypes from 'prop-types';
import GitHub from "../../public/GitHub.svg"
import Link from "../../public/Link.svg"



const Card = ({ image, title, description, codeLink, previewLink, Tecnologias }) => {


    return (
        <article className="flex flex-col w-96 h-auto py-8 relative rounded-lg bg-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col">
                <div className="w-full h-auto max-w-800 rounded-lg overflow-hidden">
                    <img src={image} alt={title} className="w-full h-auto object-cover p-2 rounded-md" />
                </div>
            </div>

            <section className="flex flex-col justify-center px-4 ">
            
                <div className="flex flex-col py-6 gap-4 text-center md:text-center">
                    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                    <p className="text-gray-700">{description}</p>
                </div>

                <div className="flex flex-row py-4 justify-center items-center md:justify-center gap-4">
                    {Array.isArray(Tecnologias) && Tecnologias.map((tecnologia, index) => (
                        <img key={index} src={tecnologia} className="w-10 h-10" alt={`Tecnologia ${index}`} />
                    ))}
                </div>

                <div className="flex flex-row justify-center items-center text-center py-6 gap-4 md:justify-center">

                    <a href={previewLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-200 hover:bg-gray-400 py-2 px-6 md:px-3 rounded-md dark:text-black transition-colors duration-300">
                        <img src={Link} alt="Link Icon" className="w-4 h-4" />
                        <span className="hidden md:block">Preview</span>
                    </a>

                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-200 hover:bg-gray-400 dark:text-black py-2 px-6 md:px-3 rounded-md transition-colors duration-300">
                        <img src={GitHub} alt="GitHub Icon" className="w-4 h-4" />
                        <span className="hidden md:block">Code</span>
                    </a>
                    
                </div>
            </section>
     
        </article>

    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    codeLink: PropTypes.string,
    previewLink: PropTypes.string.isRequired,
    Tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Card;
