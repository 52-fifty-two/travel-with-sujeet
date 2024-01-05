import ImgOne from '../../assets/images/gallery/image-1.jpg'
import ImgTwo from '../../assets/images/gallery/image-2.jpg'
import ImgThree from '../../assets/images/gallery/image-3.jpg'
import ImgFour from '../../assets/images/gallery/image-4.jpg'

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-20 text-2xl gap-5 text-slate-600">
        <h2 className="text-4xl text-center text-black">About me</h2>
        <p className="text-base  sm:text-lg ">

          <h1>Hey there! I'm Sujeet, the face behind Travel with Sujeet.</h1> <br />
          I am a travel blogger and photographer based in India. I love to travel and explore new places. I have been travelling since my childhood and have been to many places in India. I started this blog to share my travel experiences and help people to plan their trips. I hope you enjoy going through my blog and find it useful. <br />
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
