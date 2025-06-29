import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Cars from './components/Cars'
import Hero from './components/Hero'

function App() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const isOverlayOpen = infoOpen || commentOpen;

  const carCards = [
    {
      id: 1,
      name: "BMW M4 Competition",
      price: 1600000000,
      color: "Black",
      image: "https://prod.cosy.bmw.cloud/bmvis/cosySec?COSY-EU-100-2545J3qAHyFne5cRoHSWRzMESDsVcRoH7QRzMESV59VMb3G6bUJ1rjGRPixrQbUoaFoGq0zdti3Ql38mrjGd8RurQbCUQMs2q0zS33W8J13882q0zAaGU4l382hhq0zkRNSQBL4QSW8zLAd8W8J1ExSnQNUMESQdo3o3RCqoQEdcNq0zkdHNqoQqRrjGzIEtN3WCIqx8W8zWu3n7qogqaRk5l3ilUbtjcRScH8wzMbnMdo13yJGy536nrQ%25r9R1HW8zWubxdqogqaJh%25l3ilUQTUcRScH7QQMbnMd03RyJGy5B0ErQ%25r9Yp3W8zWuEfGqogqaGQFl3ilU%2575cRScHz08MbnMdgmKyJGy5i8KrQ%25r9SBYW8zWunCjqogqaG4zl3ilU%25WFcRScHzwgMbnMdgCuyJGy5i4FrQ%25r9sEGW8zWuKG%25qogqaD%25Fl3ilUCQzcRScH48AMbnMdeoqyJGy5m3ArQ%25r9si8W8zWuoYEqogqa3GIl3ilUR3AcRScHbDBMbnMdJf3yJGy55obrQ%25r99oUW8zWuuaCqogqaakel38X5KRzAHyFnJolayJROlBg3FHd5cRow3GN4MESb8JmMb36q0zMbSb459Mb35q0zRaUH",
      desc: "The BMW M4 Competition is a high-performance coupe engineered for driving enthusiasts. With aggressive styling and precision handling, it offers a perfect balance of power and luxury. Its muscular stance and track-ready performance make it a true icon of modern motoring.",
      detail: "3.0L TwinPower Turbo, 0-100 km/h in 3.9 sec, Top Speed 250 km/h",
    },
    {
      id: 2,
      name: "BMW i8",
      price: 3000000000,
      color: "White",
      image: "https://prod.cosy.bmw.cloud/bmvis/cosySec?COSY-EU-100-2545J3qAHyFne5cRoHSWRzMESDsVcRoH7QRzMESV59VMb3G6bUJ1rjGRPixrQbUoaFoGq0zdgsS%25l38mrjGd8RurQbCUQMs2q0zS33W8J13882q0zAab4bl382hhq0zkRNSQBL4QSW8zLAd8W8J1ExSnQNUMESQdoiuBUbqoQEdcNq0zkdHNqoQqRrjGzIEtN3WCIqx8W8zWubDCqogqaJNQl3ilUQT9cRScH8ZgMbnMdoPdyJGy53LtrQ%25r9Y33W8zWuEJQqogqaFuWl3ilUjv9cRScHz5BMbnMdg3YyJGy5iRBrQ%25r9SEUW8zWunFbqogqaGCel3ilU%25becRScHzmBMbnMdgokyJGy5iztrQ%25r9S1FW8zWunmHqogqaGsel3ilU%25KBcRScHzZ8MbnMdeBSyJGy5mSBrQ%25r9sRnW8zWuKbsqogqaDJNl3ilUCGRcRScHbj7MbnMdJoHyJGy5Q3grQ%25r98StW8zWuo86qogqa3NQl3ilURK0cRScHHdmMbnMJjIJyJGyo73HrQ%25rB0bDW8zWSocCqoQLds3%251UMES%2588fMb3Vq0zoEUHdl38vontCcYiRQbecRoIW7%25cRiRCd5cRodW7%253uaU",
      desc: "Futuristic and eco-conscious, the BMW i8 combines the thrill of a sports car with hybrid efficiency. Its iconic scissor doors and sleek lines stand out in any setting, while advanced electric motor technology supports both dynamic driving and sustainability.",
      detail: "1.5L Turbo Hybrid, 0-100 km/h in 4.4 sec, Top Speed 250 km/h",
    },
    {
      id: 3,
      name: "BMW X7",
      price: 2500000000,
      color: "Grey",
      image: "https://www.bmw.co.id/content/bmw/marketID/bmw_co_id/en_ID/all-models/x-series/x7/2022/bmw-x7-highlights/jcr:content/par/multicontent/tabs/multicontenttab/items/smallteaser_copy/image.transform/smallteaser/image.1675095326314.jpg",
      desc: "The BMW X7 is the pinnacle of luxury SUVs, combining a spacious interior with cutting-edge technology. It features three rows of seating, high-end finishes, and a commanding presence that makes every journey comfortable, powerful, and stylish.",
      detail: "3.0L Turbocharged, 0-100 km/h in 5.8 sec, Top Speed 245 km/h",
    },
    {
      id: 4,
      name: "BMW M5 CS",
      price: 3200000000,
      color: "Green",
      image: "bmw-green.png",
      desc: "Engineered as the fastest and most powerful BMW M5 ever, the M5 CS brings racing dynamics to the street. It features a lightweight body, carbon fiber components, and track-focused enhancements to deliver an exhilarating driving experience unlike any other sedan.",
      detail: "4.4L V8 TwinTurbo, 0-100 km/h in 3.0 sec, Top Speed 305 km/h",
    },
    {
      id: 5,
      name: "BMW Z4 Roadster",
      price: 1500000000,
      color: "Red",
      image: "bmw-red.png",
      desc: "The BMW Z4 Roadster is a sporty convertible designed for open-air driving pleasure. Its classic proportions, modern technology, and powerful engine make it ideal for those who crave freedom, performance, and elegance in equal measure.",
      detail: "2.0L Turbocharged, 0-100 km/h in 5.2 sec, Top Speed 240 km/h",
    },
    {
      id: 6,
      name: "BMW 7 Series",
      price: 2800000000,
      color: "Silver",
      image: "bmw-silver.png",
      desc: "Representing the pinnacle of executive luxury, the BMW 7 Series offers a refined ride with unparalleled comfort and innovative features. Designed for business leaders and connoisseurs, it sets new standards in sophistication and driving intelligence.",
      detail: "3.0L Turbocharged, 0-100 km/h in 5.6 sec, Top Speed 250 km/h",
    },
    {
      id: 7,
      name: "BMW X6 M",
      price: 3100000000,
      color: "Purple",
      image: "https://www.bmw.co.id/content/bmw/marketID/bmw_co_id/en_ID/all-models/z-series/roadster/2022/bmw-z4-overview/jcr:content/par/multicontent_copy/tabs/multicontenttab_copy/items/smallteaser_4376221/image.transform/smallteaser/image.1680089236632.jpg",
      desc: "The BMW X6 M combines coupe styling with SUV practicality and track-inspired performance. Its bold design and roaring V8 engine deliver an experience that is both luxurious and adrenaline-filled.",
      detail: "4.4L V8, 0-100 km/h in 3.8 sec, Top Speed 290 km/h",
    },
    {
      id: 8,
      name: "BMW M2 Coupe",
      price: 1400000000,
      color: "Orange",
      image: "bmw-orange.png",
      desc: "Compact yet mighty, the BMW M2 Coupe delivers raw driving excitement in a small package. Its perfectly balanced chassis and responsive engine make it the ultimate choice for purists who value agility and control.",
      detail: "3.0L Inline-6 Turbo, 0-100 km/h in 4.2 sec, Top Speed 250 km/h",
    },
    {
      id: 9,
      name: "BMW iX",
      price: 2700000000,
      color: "Blue",
      image: "https://www.bmw.co.id/content/bmw/marketID/bmw_co_id/en_ID/all-models/x-series/X6/2023/bmw-x6-overview/jcr:content/par/multicontent/tabs/multicontenttab/items/smallteaser_copy/image.transform/smallteaser/image.1746611867978.jpg",
      desc: "The BMW iX is an all-electric SUV that redefines mobility with futuristic design and sustainable technology. It offers a luxurious ride, spacious interior, and intelligent connectivity, proving electric can be thrilling.",
      detail: "Electric AWD, 0-100 km/h in 4.6 sec, Range up to 600 km",
    },
    {
      id: 10,
      name: "BMW 3 Series",
      price: 1000000000,
      color: "Black",
      image: "bmw-black.png",
      desc: "The BMW 3 Series is the embodiment of sportiness and practicality. With precise handling, premium materials, and advanced driver-assist features, it remains a benchmark in the compact luxury sedan segment.",
      detail: "2.0L Turbocharged, 0-100 km/h in 5.8 sec, Top Speed 250 km/h",
    },
    {
      id: 11,
      name: "BMW 5 Series Touring",
      price: 1800000000,
      color: "Red",
      image: "https://www.bmw.co.id/content/bmw/marketID/bmw_co_id/en_ID/all-models/i-series/bmw-ix-new/2021/bmw-ix/jcr:content/par/multicontent_8dd7/tabs/multicontenttab_6629/items/smallteaser_508e/image.transform/smallteaser/image.1622059048862.jpg",
      desc: "Blending performance and versatility, the BMW 5 Series Touring offers the comfort of a luxury sedan with the practicality of a wagon. Ideal for families and long-distance travel, it delivers style and substance in every detail.",
      detail: "2.0L Diesel, 0-100 km/h in 6.5 sec, Top Speed 235 km/h",
    },
    {
      id: 12,
      name: "BMW XM",
      price: 3500000000,
      color: "Yellow",
      image: "https://prod.cosy.bmw.cloud/bmvis/cosySec?COSY-EU-100-2545J3qAHyFne5cRoHSWRzMESDsVcRoH7QRzMESV59VMb3G6bUJ1rjGRPixrQbUoaFoGq0zdti3Ql38mrjGd8RurQbCUQMs2q0zS33W8J13882q0zAan%25Dl382hhq0zkRNSQBL4QSW8zLAd8W8J1ExSnQNUMESQdo3o3RCqoQEdcNq0zkdHNqoQqRrjGzIEtN3WCIqx8W8zWu3n7qogqaRk5l3ilUbtjcRScH8wzMbnMdo13yJGy536nrQ%25r9R1HW8zWubxdqogqaJh%25l3ilUQTUcRScH7QQMbnMd03RyJGy5B0ErQ%25r9Yp3W8zWuEfGqogqaGQFl3ilU%2575cRScHz08MbnMdgmKyJGy5i8KrQ%25r9SBYW8zWunCjqogqaG4zl3ilU%25WFcRScHzwgMbnMdgCuyJGy5i4FrQ%25r9sEGW8zWuKG%25qogqaD%25Fl3ilUCQzcRScH48AMbnMdeoqyJGy5m3ArQ%25r9si8W8zWuoYEqogqa3GIl3ilUR3AcRScHbDBMbnMdJf3yJGy55obrQ%25r99oUW8zWuuaCqogqaakel38X5KRzAHyFnJolayJROlBg3FHd5cRow3GN4MESb8JmMb36q0zMbSb459Mb35q0zRaUH",
      desc: "The BMW XM is a bold plug-in hybrid SUV from the M division, blending electrification with high-performance luxury. With radical design and cutting-edge engineering, it marks a new era in high-end driving dynamics.",
      detail: "V8 Plug-in Hybrid, 0-100 km/h in 4.1 sec, Top Speed 270 km/h",
    }
  ];

  const [products, setProducts] = useState(
    carCards.map((p) => ({ ...p, liked: false, inCart: false, quantity: 0 }))
  );

  const toggleLike = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  const toggleCart = (id) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, inCart: !p.inCart, quantity: !p.inCart ? 1 : 0 }
          : p
      )
    );
  };

  const changeQty = (id, type) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        if (type === "inc") return { ...p, quantity: p.quantity + 1 };
        if (type === "dec") {
          if (p.quantity === 1) return { ...p, inCart: false, quantity: 0 };
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      })
    );
  };

  const cartCount = products.reduce((sum, p) => sum + p.quantity, 0);
  const likeCount = products.filter((p) => p.liked).length;

  return (
    <>
      <Header cartCount={cartCount} likeCount={likeCount} />

      <div className="pt-10">
        {/* mengirim propssss dengan gaya lain */}
        <Hero
          title="Ultimate BMW Collection"
          description="Explore the latest lineup of BMW cars combining iconic design, exhilarating performance, and cutting-edge innovation. Redefine your driving experience today."
          imageUrl="https://bmw.scene7.com/is/image/BMW/Homepage-F45-G45:2to1?fmt=webp&wid=1504&hei=752"
          buttonText="Explore Now"
          buttonHref="#"
        />
      </div>

      <div className={`pt-[4rem] ${isOverlayOpen ? "blur-overlay" : ""}`}>
        <Cars
          products={products}
          onToggleLike={toggleLike}
          onToggleCart={toggleCart}
          onQtyInc={(id) => changeQty(id, "inc")}
          onQtyDec={(id) => changeQty(id, "dec")}
          infoOpen={infoOpen}
          setInfoOpen={setInfoOpen}
          commentOpen={commentOpen}
          setCommentOpen={setCommentOpen}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
