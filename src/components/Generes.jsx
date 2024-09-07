import { FaTruck } from "react-icons/fa"
import Title from "./Title"
import { LuSword } from "react-icons/lu"
import { IoMdHeartHalf } from "react-icons/io"
import { FaGun } from "react-icons/fa6"

export default function Generes() {
  const generes = [
    {
      icon:<FaTruck />,
      title:'Isekai',
      info: "Isekai is a Japanese anime genre that features a character who is transported to a new world, often a fantasy world, where they must survive and adapt to a new life. The word 'isekai' literally means 'other world' "
    },
    {
      icon:<LuSword />,
      title:'Action',
      info: "Action anime is a style of Japanese animation that features fast-paced, adrenaline-fueled action, often with vibrant characters and colorful graphics"
    },
    {
      icon:<IoMdHeartHalf />,
      title:'Romance',
      info: "Romance anime explores the development of romantic feelings between characters and the challenges they face in maintaining relationships. Romance anime can range from lighthearted to serious and heart-wrenching"
    },
    {
      icon:<FaGun />,
      title:'Crime',
      info: "Crime anime often involves criminal underworlds, investigations, and other crime-related themes "
    },
  ]
  return (
    <section className="generes">
      <Title title="generes" />
      <div className="generes-center">
        {generes.map((item, index) => {
          return <article key={index} className="genere">
              <span>{item.icon}</span>  
              <h6>{item.title}</h6>  
              <p>{item.info}</p>  
            </article>
        })}
      </div>
    </section>
  )
}
