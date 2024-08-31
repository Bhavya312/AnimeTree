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
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ullam ipsum, illo officiis "
    },
    {
      icon:<LuSword />,
      title:'Action',
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ullam ipsum, illo officiis "
    },
    {
      icon:<IoMdHeartHalf />,
      title:'Romance',
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ullam ipsum, illo officiis "
    },
    {
      icon:<FaGun />,
      title:'Crime',
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ullam ipsum, illo officiis "
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
