
import RickyMortyIMage from '../public/Images/rickMorty.jpg'
import DictionaryImage from '../public/Images/DictionaryApp.png'
import EcommerceAppImage from '../public/Images/Ecommerce.png'
import WeatherAppImage from '../public/Images/weatherApp.png'
import FigmaProjectImage from '../public/Images/FigmaProject.png'
import ExercisesImage from '../public/Images/Exercises.jpg'
import Image from "next/image";
import styles from '../styles/home.module.css'

const callouts = [
    {
      name: 'Rick and Morty',
      description: 'Rick-and-Morty-API-React-NextJS',
      imageSrc:RickyMortyIMage,
      imageAlt: 'rickMorty',
      href: 'https://rick-and-morty-api-react-next-js.vercel.app/',
    },
    {
      name: 'DictionaryApp',
      description: 'Dictionary-App-NextJS',
      imageSrc: DictionaryImage,
      imageAlt: 'DictionaryApp',
      href: 'https://dictionary-app-react-nextjs-with-api.vercel.app/',
    },
    {
      name: 'EcommerceApp',
      description: 'Ecommerce-App-Tailwindcss-NextJS',
      imageSrc: EcommerceAppImage,
      imageAlt: 'EcommerceApp-Tailwindcss',
      href: 'https://tailwindcss-ecommerce-nextjs.vercel.app/',
    },
    {
      name: 'WeatherApp',
      description: 'Weather-App-Tailwindcss-NextJS',
      imageSrc: WeatherAppImage ,
      imageAlt: 'WeatherApp-Tailwindcss',
      href: 'https://weather-forecast-web-react-next-js-api.vercel.app/',
    },
    {
      name: 'FigmaProject',
      description: 'FigmaProject-Tailwindcss-NextJS',
      imageSrc: FigmaProjectImage ,
      imageAlt: 'FigmaProject-Tailwindcss',
      href: 'https://figma-project-brown.vercel.app/',
    },
    {
      name: 'Tailwindcss-Exercises',
      description: 'FigmaProject-Tailwindcss-NextJS',
      imageSrc: ExercisesImage ,
      imageAlt: 'Exercises-Tailwindcss',
      href: 'https://nextjs-tailwind-css-exercises.vercel.app/',
    },
  ]
  
  export default function Works() {
    return (
      <div >

        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="font text-4xl font-bold tracking-tight text-white sm:text-6xl">My recent <span className={styles.span}>works</span></h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  