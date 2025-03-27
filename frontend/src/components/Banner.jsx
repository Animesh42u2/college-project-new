import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const bannerItems = [
        {
            imageUrl: "/src/assets/Hospital_image.jpg", // Replace with the actual image path
            title: 'KIMS Hospital',
            description: 'KIMS Hospital in Bhubaneswar maintains and nurture the highest standard of medical care.',
            link: 'https://kims.kiit.ac.in/hospital/', // Replace with the actual link
        },
        {
            imageUrl: '/src/assets/B3.jpg', // Replace with the actual image path
            title: 'KIMS Super Speciality Hospital',
            description: 'The newly inaugurated Super Speciality Hospital is set to redefine healthcare delivery process in Odisha and neighbouring states.',
            link: 'https://kims.kiit.ac.in/super-speciality/', // Replace with the actual link
        },
        {
            imageUrl: '/src/assets/B2.jpg', // Replace with the actual image path
            title: 'KIMS Cancer Care Centre',
            description: 'KIMS has come up with the ultramodern Cancer Care Centre as the burden of cancer is increasing in the society.',
            link: 'https://kims.kiit.ac.in/departments/cancer-centre-kcc/', // Replace with the actual link
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">All About KIMS</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {bannerItems.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <a
                                    href={item.link}
                                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                                >
                                    Know More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner