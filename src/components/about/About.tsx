import ImgOne from '../../assets/images/gallery/image-1.jpg'
import ImgTwo from '../../assets/images/gallery/image-2.jpg'
import ImgThree from '../../assets/images/gallery/image-3.jpg'
import ImgFour from '../../assets/images/gallery/image-4.jpg'

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">About</h2>
        <p className="text-base  sm:text-lg ">
        India is a country that evokes a sense of wonder and adventure, offering an enchanting blend of diverse landscapes, rich history, and vibrant culture. From the snow-capped peaks of the Himalayas to the sun-kissed beaches of Goa, India's geographical diversity is unparalleled. As you traverse this vast nation, you'll be captivated by its historical marvels, such as the awe-inspiring Taj Mahal and the ancient caves of Ellora. India's cultural tapestry is equally mesmerizing, with bustling bazaars, colorful festivals like Holi, and traditional dance forms that embody grace and storytelling. Seekers of spiritual enlightenment will find solace in the sacred city of Varanasi and the serene ashrams of Rishikesh. Indulge your taste buds in the tantalizing array of flavors offered by India's cuisine, from the aromatic biryanis of Hyderabad to the fiery curries of Rajasthan. Nature lovers will be enthralled by the country's wildlife sanctuaries and national parks, where you can spot majestic tigers and roam the picturesque backwaters of Kerala. Embarking on a journey through India is an immersive experience that will leave an indelible mark on your soul, offering a glimpse into a world of vibrant colors, ancient traditions, and warm hospitality.
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-8 ">
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgOne}
            alt="Amritsar"
          />
          <p className="font-bold">Amritsar</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgTwo}
            alt="Golconda"
          />
          <p className="font-bold">Golconda</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgThree}
            alt="Hyderabad"
          />
          <p className="font-bold">Hyderabad</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgFour}
            alt="Manali"
          />
          <p className="font-bold">Manali</p>
        </section>
      </section>
    </article>
  )
}

export default About
